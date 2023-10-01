import React, { useEffect, useState } from "react";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Row, Col, ListGroup, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  dbSaveCart,
  removeOneFromCart,
  addOneToCart,
} from "../actions/cartActions";
import Message from "../components/Message";
import { CART_CLEAR_ITEM, CART_DB_RESET } from "../constants/cartConstants";
import Meta from "../components/Meta";
import { formatCurrency, userLocale } from "../utils";

const CartScreen = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAddon, setTotalAddon] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems, currency, error } = cart;

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const cartSaveDb = useSelector((state) => state.cartSaveDb);
  const { success } = cartSaveDb;

  useEffect(() => {
    if (cartItems) {
      const total_price = cartItems.reduce((accumulator, item) => {
        const item_price = item.price.price * item.qty;

        if (item.addonData.length > 0) {
          const addon_price = item.addonData.reduce(
            (addonAccumulator, addon) => {
              return addonAccumulator + addon.prices[0].price * item.qty;
            },
            0
          );
          setTotalAddon(addon_price);
          accumulator += item_price + addon_price;
        } else {
          accumulator += item_price;
        }

        return accumulator;
      }, 0);
      setTotalPrice(total_price);
    }
  }, [cartItems]);

  useEffect(() => {
    dispatch(addToCart());
    if (success) {
      navigate("/checkout");
      dispatch({ type: CART_DB_RESET });
      localStorage.removeItem("cartItems");
      localStorage.removeItem("cartCurrency");
      dispatch({ type: CART_CLEAR_ITEM });
      setTotalAddon(0);
    }
  }, [dispatch, navigate, success]);

  useEffect(() => {
    if (cartItems.length === 0) {
      setTotalAddon(0);
    }
  }, [cartItems.length]);

  const removeItemHandler = (slug) => {
    dispatch(removeFromCart(slug));
  };
  const checkOutHandler = () => {
    dispatch(dbSaveCart(cartItems, totalPrice, currency));
  };
  return (
    <>
      <Meta title="Foody | Cart" />
      <Row>
        <Col md={9}>
          {error && <Message variant={"info"}>{error}</Message>}
          {cartItems.length === 0 ? (
            <Message variant={"info"}>
              Your cart is empty! <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item, index) => (
                <ListGroup.Item
                  key={item.product}
                  style={{ backgroundColor: "#dfe6e9" }}
                >
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={4}>
                      <Link
                        to={`/product/${item.slug}`}
                        style={{
                          color: "#000",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        {item.title}
                      </Link>
                      {"name" in item.variableData && (
                        <p
                          style={{
                            backgroundColor: "#b2bec3",
                            padding: "5px 5px 7px",
                            margin: "0px",
                            borderRadius: "10px",
                            color: "#000",
                            fontSize: "14px",
                            marginBottom: "3px",
                          }}
                        >
                          <span style={{ fontWeight: "500" }}>Type:</span>{" "}
                          {item.variableData.name}
                        </p>
                      )}

                      {item.addonData.length > 0 && (
                        <div
                          style={{
                            backgroundColor: "#b2bec3",
                            padding: "5px 5px",
                            margin: "0px",
                            borderRadius: "10px",
                          }}
                        >
                          <div>
                            <span style={{ fontWeight: "500" }}>Addon:</span>
                          </div>
                          <div>
                            {item.addonData.map(({ name, prices, value }) => (
                              <p
                                style={{
                                  color: "#000",
                                  fontSize: "13px",
                                  margin: "0px",
                                }}
                                key={value}
                              >
                                {name} x {item.qty && item.qty}
                              </p>
                            ))}
                          </div>
                          <hr style={{ margin: "0" }} />
                          <div>
                            <p
                              style={{
                                color: "#000",
                                fontSize: "13px",
                                margin: "0px",
                              }}
                            >
                              Total Addon Price:{" "}
                              {formatCurrency(
                                item.addonData.reduce((acc, item) => {
                                  return (
                                    acc +
                                    item.prices.reduce(
                                      (priceAcc, priceItem) => {
                                        return priceAcc + priceItem.price;
                                      },
                                      0
                                    )
                                  );
                                }, 0) * item.qty,
                                item.price.currency,
                                item.price.currencySymbol,
                                userLocale
                              )}
                            </p>
                          </div>
                        </div>
                      )}
                    </Col>
                    <Col md={2}>
                      <p style={{ fontWeight: "600" }}>
                        {formatCurrency(
                          item.price.price * item.qty,
                          item.price.currency,
                          item.price.currencySymbol,
                          userLocale
                        )}
                      </p>
                    </Col>
                    <Col md={3} className="d-flex flex-row align-items-start">
                      <Button
                        onClick={() => dispatch(removeOneFromCart(index))}
                        disabled={item.qty < 2}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                      <span
                        style={{
                          padding: "7px 15px",
                          backgroundColor: "#fdcb6e",
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                      >
                        {item.qty && item.qty}
                      </span>
                      <Button
                        onClick={() => dispatch(addOneToCart(index))}
                        disabled={item.qty > 49}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                    </Col>
                    <Col md={1}>
                      <Button
                        type="button"
                        variant="dark"
                        onClick={() => {
                          removeItemHandler(item.slug);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={3}>
          <Card style={{ backgroundColor: "#DFE6E9" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                {"currency" in currency &&
                  `Currency: ${currency.currency}-${currency.currencySymbol}`}
              </ListGroup.Item>
              <ListGroup.Item>
                Total: ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                Items
              </ListGroup.Item>
              <ListGroup.Item>
                Total Product (
                {currency &&
                  currency.currency &&
                  formatCurrency(
                    totalPrice - totalAddon,
                    currency.currency,
                    currency.currencySymbol,
                    userLocale
                  )}
                )
              </ListGroup.Item>
              <ListGroup.Item>
                Total Addon Price (
                {currency &&
                  currency.currency &&
                  formatCurrency(
                    totalAddon,
                    currency.currency,
                    currency.currencySymbol,
                    userLocale
                  )}{" "}
                )
              </ListGroup.Item>
              <ListGroup.Item>
                Total ({currency && currency.currencySymbol} {totalPrice})
              </ListGroup.Item>
              <ListGroup.Item>
                {userInfo ? (
                  <Button
                    variant="success"
                    style={{ width: "-webkit-fill-available" }}
                    onClick={checkOutHandler}
                    disabled={!cartItems.length > 0}
                  >
                    Proceed To CheckOut
                  </Button>
                ) : (
                  <Button
                    style={{ width: "-webkit-fill-available" }}
                    disabled={!cartItems.length}
                    variant="info"
                  >
                    <Link
                      to={{
                        pathname: "/login",
                        state: { from: "cart" },
                      }}
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Log In To CheckOut
                    </Link>
                  </Button>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;

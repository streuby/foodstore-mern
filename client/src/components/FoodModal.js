import React, { useState, useEffect } from "react";
import { Button, Modal, Image, Row, Col, ListGroup } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faMinus,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import Skeleton from "react-loading-skeleton";
import Message from "./Message";
import { addToWish } from "../actions/userActions";
import Loader from "./Loader";
import { formatCurrency, userLocale } from "../utils";

const FoodModal = ({
  setModalShow,
  modalShow,
  product,
  loading,
  error,
  userInfo,
  loadingAdd,
}) => {
  const [counter, setCounter] = useState(1);
  const [variable, setVariable] = useState({});
  const [addon, setAddon] = useState([]);
  const [price, setPrice] = useState({
    type: "",
    name: "",
    price: 0,
    currencySymbol: "",
    currency: "",
    _id: "",
  });
  const [selectedPrice, setSetselectedPrice] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const setVariables = () => {
      switch (price.type) {
        case "simple":
          setSetselectedPrice(price.currencySymbol);
          break;

        case "variable":
          setVariable({
            name: price.name,
            price: price.price,
            currencySymbol: price.currencySymbol,
            currency: price.currency,
            _id: price._id,
          });
          break;
        default:
          break;
      }
    };

    setVariables();
  }, [price]);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    addon.map((item) =>
      // eslint-disable-next-line array-callback-return
      item.prices.map((_item) => {
        if (_item.currency !== price.currency) {
          setAddon([]);
        }
      })
    );
  }, [addon, price.currency]);

  const handleAddToCart = () => {
    dispatch(addToCart(product.slug, price, counter, variable, addon));
    //console.log({ slug: product.slug, price, qry: counter, variable, addon });
    setModalShow(false);
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="xl" centered>
        <Modal.Header
          className="d-flex justify-content-end pb-0"
          style={{ backgroundColor: "#FFC94F", border: "none" }}
        >
          <Button onClick={props.onHide}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Modal.Header>
        <div
          style={{
            backgroundColor: "#FFC94F",
            padding: "50px",
            borderRadius: "10px",
          }}
        >
          <Row>
            {error && <Message variant="alert">{error}</Message>}
            <Col sm={12} md={6}>
              {loading ? (
                <Skeleton height={400} count={1} />
              ) : (
                <>
                  <Image
                    src={product.image && product.image.url}
                    alt={product.title}
                    className="w-75"
                  ></Image>
                  {userInfo && (
                    <Button
                      variant="secondary"
                      onClick={() => dispatch(addToWish(product._id))}
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "15px",
                      }}
                    >
                      {loadingAdd ? (
                        <Loader className="size-sm" />
                      ) : (
                        <FontAwesomeIcon icon={faHeart} />
                      )}
                    </Button>
                  )}
                </>
              )}
            </Col>
            <Col sm={12} md={6}>
              {loading ? (
                <Skeleton height={50} count={4} />
              ) : (
                <>
                  <ListGroup>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>
                      <h2 style={{ color: "#000000", fontWeight: "600" }}>
                        {product.title}
                      </h2>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>
                      <Row>
                        <Col>Category:</Col>
                        <Col>
                          <Link
                            to={`/category/${product.category?.slug}`}
                            className="food-card_category"
                            style={{
                              color: "#34495e",
                              fontSize: "18px",
                              cursor: "pointer",
                            }}
                          >
                            {product.category?.name}
                          </Link>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>
                      <Row>
                        <Col>Description:</Col>
                        <Col>
                          <p>{product.description && product.description}</p>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>
                      {product.variable && <h4>Choose from bellow: </h4>}
                      {product.prices && product.prices.length > 0 ? (
                        <Tabs defaultActiveKey="NGN" id="tab" className="mb-3">
                          {product.prices.map(
                            ({ price, currencySymbol, currency, _id }) => (
                              <Tab eventKey={currencySymbol} title={currency}>
                                <Form.Check type="checkbox" id={`${_id}`}>
                                  <Form.Check.Input
                                    type="checkbox"
                                    value={currencySymbol}
                                    checked={selectedPrice === currencySymbol}
                                    onChange={(e) => {
                                      setPrice({
                                        type: "simple",
                                        price: price,
                                        currencySymbol: currencySymbol,
                                        currency: currency,
                                        _id: _id,
                                      });
                                    }}
                                    isValid
                                  />
                                  <Form.Check.Label>
                                    <p>{`${formatCurrency(
                                      price,
                                      currency,
                                      currencySymbol,
                                      userLocale
                                    )}`}</p>
                                  </Form.Check.Label>
                                  <Form.Control.Feedback type="valid">
                                    Check to select price
                                  </Form.Control.Feedback>
                                </Form.Check>
                              </Tab>
                            )
                          )}
                        </Tabs>
                      ) : product.variable ? (
                        product.variable.attribute.map((attr) => (
                          <div key={attr._id}>
                            <Row
                              className="variable-item p-1"
                              style={{ borderRadius: "10px" }}
                            >
                              <label htmlFor={attr._id}>
                                <Col className="d-flex align-items-center">
                                  <Image
                                    src={product.image && product.image.url}
                                    alt={product.title}
                                    style={{
                                      width: "50px",
                                      margin: "0px 5px",
                                    }}
                                  ></Image>
                                  {attr.prices.length > 0 &&
                                    attr.prices.map(
                                      ({
                                        price,
                                        currencySymbol,
                                        currency,
                                        _id,
                                      }) => (
                                        <>
                                          {" [ "}
                                          <input
                                            type="radio"
                                            name="variable"
                                            value={_id}
                                            id={_id}
                                            checked={variable._id === _id}
                                            onClick={(e) => {
                                              setPrice({
                                                type: "variable",
                                                name: attr.name,
                                                price: price,
                                                currencySymbol: currencySymbol,
                                                currency: currency,
                                                _id: _id,
                                              });
                                            }}
                                          />
                                          <p style={{ margin: "0px" }}>
                                            {attr.name} -{" "}
                                            {formatCurrency(
                                              price,
                                              currency,
                                              currencySymbol,
                                              userLocale
                                            )}
                                          </p>
                                          {" ] "}
                                        </>
                                      )
                                    )}
                                </Col>
                              </label>
                            </Row>
                            <br />
                          </div>
                        ))
                      ) : (
                        "No Price Given"
                      )}
                    </ListGroup.Item>
                    {product.addon &&
                      product.addon.length > 0 &&
                      price.price !== 0 && (
                        <ListGroup.Item
                          style={{ backgroundColor: "transparent" }}
                        >
                          <MultiSelect
                            options={product.addon
                              .map((a) => ({
                                label: `${a.name}-${a.prices[0].currencySymbol}${a.prices[0].price}`,
                                value: a._id,
                                prices: a.prices,
                                name: a.name,
                              }))
                              .filter(
                                (a) => a.prices[0].currency === price.currency
                              )}
                            value={addon}
                            onChange={setAddon}
                            labelledBy="Select Addon"
                            className="product-addons"
                          />
                        </ListGroup.Item>
                      )}
                    {price.price > 0 && (
                      <ListGroup.Item
                        style={{ backgroundColor: "transparent" }}
                      >
                        <p>
                          <h4>
                            You will be billed{" "}
                            {formatCurrency(
                              price.price * counter +
                                addon.reduce((total, item) => {
                                  const currencyPrices = item.prices.filter(
                                    (_price) =>
                                      _price.currency === price.currency
                                  );
                                  const sum = currencyPrices.reduce(
                                    (acc, __price) => acc + __price.price,
                                    0
                                  );
                                  return (total + sum) * counter;
                                }, 0),
                              price.currency,
                              price.currencySymbol,
                              userLocale
                            )}
                          </h4>
                        </p>
                      </ListGroup.Item>
                    )}
                    {product.availability === "Yes" ? (
                      <ListGroup.Item
                        style={{ backgroundColor: "transparent" }}
                      >
                        <Row>
                          <Col className="d-flex">
                            <Button
                              onClick={() => setCounter(counter - 1)}
                              disabled={counter < 2}
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </Button>
                            <span
                              style={{
                                padding: "10px 15px",
                                backgroundColor: "#fdcb6e",
                                fontWeight: "600",
                                fontSize: "18px",
                              }}
                            >
                              {counter}
                            </span>
                            <Button
                              onClick={() => setCounter(counter + 1)}
                              disabled={counter > 49}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </Button>
                          </Col>
                          <Col>
                            <Button
                              style={{ width: "-webkit-fill-available" }}
                              variant="dark"
                              onClick={handleAddToCart}
                              disabled={price.type === ""}
                            >
                              Add To Cart <FontAwesomeIcon icon={faCartPlus} />
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ) : (
                      <Message variant="info">Item Not Available</Message>
                    )}
                  </ListGroup>
                </>
              )}
            </Col>
          </Row>
        </div>
      </Modal>
    );
  }
  return (
    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      animation={false}
    />
  );
};

export default FoodModal;

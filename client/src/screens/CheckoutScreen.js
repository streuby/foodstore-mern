import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearDbCart,
  couponCancel,
  listCart,
  userDbCartDelete,
} from "../actions/cartActions";
import ShippingForm from "../components/form/ShippingForm";
import Message from "../components/Message";
import {
  APPLY_COUPON_RESET,
  CANCEL_COUPON_RESET,
  CART_LIST_RESET,
  DB_CART_CLEAR_RESET,
} from "../constants/cartConstants";
import { useAlert } from "react-alert";
import { CART_SAVE_SHIPPING_ADDRESS_RESET } from "../constants/userConstants";
import ApplyCoupon from "../components/form/ApplyCoupon";
import Loader from "../components/Loader";
import { createOrder } from "../actions/orderActions";
import Meta from "../components/Meta";
import { formatCurrency, userLocale } from "../utils";

const CheckoutScreen = () => {
  const alert = useAlert();
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const cartList = useSelector((state) => state.cartList);
  const { cartItems } = cartList;

  const dbCartClear = useSelector((state) => state.dbCartClear);
  const { success: cartClearSuccess } = dbCartClear;

  const userList = useSelector((state) => state.userList);
  const { successShippingAdded, errorShippingAdded } = userList;

  const applyCoupon = useSelector((state) => state.applyCoupon);
  const {
    loading: loadingApplyCoupon,
    success: successApplyCoupon,
    error: errorApplyCoupon,
  } = applyCoupon;

  const cancelCoupon = useSelector((state) => state.cancelCoupon);
  const { loading: loadingCancelCoupon, success: successCancelCoupon } =
    cancelCoupon;

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, loading, error: errorCreateOrder } = orderCreate;

  useEffect(() => {
    if (userInfo && !userInfo.token) {
      navigate("/");
    } else {
      dispatch(listCart());
      if (cartClearSuccess) {
        dispatch({ type: DB_CART_CLEAR_RESET });
        dispatch({ type: CART_LIST_RESET });
        navigate("/");
      }
      if (successShippingAdded) {
        alert.success("Shipping Address Added");
        dispatch({ type: CART_SAVE_SHIPPING_ADDRESS_RESET });
      }
      if (successCancelCoupon) {
        alert.success("Coupon Removed");
        dispatch({ type: CANCEL_COUPON_RESET });
        dispatch(listCart());
      }
      if (successApplyCoupon) {
        alert.success("Coupon Added");
        dispatch({ type: APPLY_COUPON_RESET });
        dispatch(listCart());
      } else {
        dispatch({ type: APPLY_COUPON_RESET });
      }
      if (success) {
        dispatch({ type: CART_LIST_RESET });
        dispatch(userDbCartDelete());
        alert.success("Order Placed ");
        navigate(`/order/${order._id}`);
      }
    }
    // eslint-disable-next-line
  }, [
    userInfo,
    navigate,
    dispatch,
    cartClearSuccess,
    successShippingAdded,
    alert,
    successApplyCoupon,
    successCancelCoupon,
    success,
  ]);

  const handleClearCart = () => {
    dispatch(clearDbCart());
  };

  const cancelCouponHandler = () => {
    dispatch(couponCancel());
  };

  const handleCashOnDelivery = () => {
    const payload = {
      amount:
        cartItems?.couponApplied === true
          ? Number(cartItems.totalAfterDiscount * 100)
          : Number(cartItems?.cartTotal * 100),
      status: "pending",
    };

    dispatch(createOrder(payload, "Cash On Delivery"));
  };

  return (
    <>
      <Meta title="Food Store | Checkout" />
      <Row>
        {cartItems ? (
          <>
            <Col md={6} sm={12}>
              <Row className="d-flex flex-column">
                <Col>
                  {errorShippingAdded && (
                    <Message variant="danger">{errorShippingAdded}</Message>
                  )}
                  <h3>Shipping Information</h3>

                  <ShippingForm />
                </Col>
                <Col>
                  <ApplyCoupon
                    errorApplyCoupon={errorApplyCoupon}
                    loadingApplyCoupon={loadingApplyCoupon}
                  />
                </Col>
              </Row>
            </Col>
            <Col md={6} sm={12}>
              <h3>Order Summary</h3>

              <ListGroup>
                {!cartItems ? (
                  <ListGroup.Item>
                    Go back to Home<Link to="/"></Link>
                  </ListGroup.Item>
                ) : (
                  cartItems &&
                  cartItems.products.map((pd) => (
                    <ListGroup.Item key={pd._id}>
                      <Row className="d-flex flex-column">
                        <Col>
                          <span style={{ fontWeight: "600" }}>
                            {pd.slug} x {pd.qty} =
                            {formatCurrency(
                              pd.qty * pd.price.price,
                              pd.price.currency,
                              pd.price.currencySymbol,
                              userLocale
                            )}
                          </span>
                        </Col>
                        {pd.variableData && (
                          <Col>
                            <span style={{ fontSize: "14px" }}>Type:</span>{" "}
                            <Badge
                              style={{
                                backgroundColor: "#b33939",
                                marginLeft: "2px",
                              }}
                            >
                              {pd.variableData.name}
                            </Badge>
                          </Col>
                        )}
                        {pd.addonData && (
                          <Col>
                            {pd.addonData.length > 0 && (
                              <span style={{ fontSize: "14px" }}>Addons:</span>
                            )}{" "}
                            {pd.addonData.map((adn) => (
                              <Badge
                                key={adn._id}
                                style={{
                                  backgroundColor: "#FFC107",
                                  marginLeft: "2px",
                                }}
                              >
                                {adn.name}
                              </Badge>
                            ))}
                          </Col>
                        )}
                      </Row>
                    </ListGroup.Item>
                  ))
                )}
                <ListGroup.Item style={{ backgroundColor: "#dff9fb" }}>
                  <span style={{ fontWeight: "600" }}>Total: </span>
                  {cartItems && cartItems.couponApplied === false ? (
                    formatCurrency(
                      cartItems.cartTotal,
                      cartItems.currency.currency,
                      cartItems.currency.currencySymbol,
                      userLocale
                    )
                  ) : (
                    <del>{cartItems.cartTotal}</del>
                  )}
                </ListGroup.Item>
                {cartItems && cartItems.couponApplied && (
                  <ListGroup.Item style={{ backgroundColor: "#273c75" }}>
                    <Row className="d-flex align-items-center">
                      <Col md={8}>
                        <span style={{ color: "#fff" }}>
                          Discount Applied: Total Payable:{" "}
                          {cartItems.currency.currencySymbol}
                          {cartItems && cartItems.totalAfterDiscount}
                        </span>
                      </Col>
                      <Col md={4}>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={cancelCouponHandler}
                          disabled={loadingCancelCoupon}
                        >
                          Cancel Coupon
                          {loadingCancelCoupon && <Loader size="size-sm" />}
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <h6>Payment Method:</h6>
                  <Form.Check
                    type="radio"
                    label="Stripe Payment"
                    id="Stripe"
                    name="paymentMethod"
                    value="Stripe"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="Paystrack Payment"
                    id="Paystack"
                    name="paymentMethod"
                    value="Paystack"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="Flutterwave Payment"
                    id="Flutterwave"
                    name="paymentMethod"
                    value="Flutterwave"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="Cash On Delivery"
                    id="Cod"
                    name="paymentMethod"
                    value="Cod"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      {paymentMethod && paymentMethod === "Stripe" ? (
                        <Button
                          disabled={userInfo && !userInfo.shipping}
                          variant={
                            userInfo && !userInfo.shipping ? "dark" : "success"
                          }
                          onClick={() =>
                            navigate(`/placeorder/${paymentMethod}`)
                          }
                        >
                          Place Order (Stripe)
                        </Button>
                      ) : paymentMethod === "Cod" ? (
                        <Button
                          disabled={userInfo && !userInfo.shipping}
                          variant={
                            userInfo && !userInfo.shipping ? "dark" : "success"
                          }
                          onClick={handleCashOnDelivery}
                        >
                          {loading ? (
                            <Loader className="size-sm" />
                          ) : (
                            "Place Order (Paystack)"
                          )}
                        </Button>
                      ) : paymentMethod === "Paystack" ? (
                        <Button
                          disabled={userInfo && !userInfo.shipping}
                          variant={
                            userInfo && !userInfo.shipping ? "dark" : "success"
                          }
                          onClick={() =>
                            navigate(`/placeorder/${paymentMethod}`)
                          }
                        >
                          Place Order (Paystack)
                        </Button>
                      ) : paymentMethod === "Flutterwave" ? (
                        <Button
                          disabled={userInfo && !userInfo.shipping}
                          variant={
                            userInfo && !userInfo.shipping ? "dark" : "success"
                          }
                          onClick={() =>
                            navigate(`/placeorder/${paymentMethod}`)
                          }
                        >
                          Place Order (Flutterwave)
                        </Button>
                      ) : (
                        <Button disabled variant={"dark"}>
                          No Payment Method Selected
                        </Button>
                      )}
                      {errorCreateOrder && (
                        <Message variant="danger">{errorCreateOrder}</Message>
                      )}
                    </Col>
                    <Col>
                      <Button onClick={handleClearCart} variant="warning">
                        Clear Items
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </>
        ) : (
          <Message variant="info">
            No Product has been Proceed to checkout. Go back to{" "}
            <Link to={"/"}>Home</Link>
          </Message>
        )}
      </Row>
    </>
  );
};

export default CheckoutScreen;

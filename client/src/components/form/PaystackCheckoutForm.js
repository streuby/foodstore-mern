import React, { useEffect, useState } from "react";
import axios from "axios";
import { PaystackButton } from "react-paystack";
import FormContainer from "../FormContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Card, Col, ListGroup, Row } from "react-bootstrap";
import { createOrder } from "../../actions/orderActions";
import Message from "../Message";
import { CART_LIST_RESET } from "../../constants/cartConstants";
import { userDbCartDelete } from "../../actions/cartActions";
import { useAlert } from "react-alert";
import { formatCurrency, userLocale } from "../../utils";
import { updatePaymentStatus } from "../../actions/orderActions";

const PaystackCheckoutForm = ({
  cartItems,
  userInfo,
  error,
  intentSuccess,
  intent,
  orderId,
}) => {
  const alert = useAlert();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [publicKey, setPublicKey] = useState("");
  const [paid, setpaid] = useState(false);

  const dispatch = useDispatch();

  const orderCreate = useSelector((state) => state.orderCreate);
  const { success, loading, error: errorCreateOrder } = orderCreate;

  useEffect(() => {
    let ignore = false;
    // Paystack
    const setPayStack = async () => {
      const { data: publicKey } = await axios.get("/api/paystack/paystack");
      if (publicKey) {
        setDisabled(false);
        setPublicKey(publicKey);
      }
    };

    if (!ignore) {
      setPayStack();
    }
    return () => (ignore = true);
  }, []);

  useEffect(() => {
    if (success) {
      dispatch({ type: CART_LIST_RESET });
      dispatch(userDbCartDelete());
      alert.success("Order Placed ");
    }
    // eslint-disable-next-line
  }, [success, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: userInfo.email,
    amount: intent.amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: publicKey,
  };

  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    if (orderId && reference.status === "success") {
      setpaid(true);
      setSucceeded(true);
      dispatch(updatePaymentStatus(orderId, "succeeded"));
    } else if (reference.status === "success" && !orderId) {
      setpaid(true);
      setSucceeded(true);
      dispatch(
        createOrder(
          { id: reference.trxref, amount: intent.amount, status: "succeeded" },
          "Paystack",
          intent.currency
        )
      );
    }

    setProcessing(false);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    //console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Pay",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  const cartStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  return (
    <FormContainer>
      <div>
        <h4>Order Summary:</h4>

        <Card>
          {errorCreateOrder && (
            <Message variant="danger">{errorCreateOrder}</Message>
          )}
          <ListGroup>
            {cartItems?.length > 0 &&
              cartItems.products.map((pd, index) => (
                <ListGroup.Item key={pd._id}>
                  <Row className="d-flex flex-column">
                    <Col>
                      <Row className="d-flex flex-row">
                        <Col md={9}>
                          <span style={{ fontWeight: "900" }}>
                            {index + 1}){" "}
                          </span>
                          <span style={{ fontWeight: "600" }}>
                            {pd.product.title} x {pd.qty}
                          </span>
                        </Col>
                        <Col md={3}>
                          <span style={{ fontWeight: "600" }}>
                            =
                            {formatCurrency(
                              pd.qty * pd.price.price,
                              pd.price.currency,
                              pd.price.currencySymbol,
                              userLocale
                            )}
                          </span>
                        </Col>
                      </Row>
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
                    {pd.addonData.length > 0 && (
                      <>
                        <Col>
                          <span style={{ fontSize: "14px" }}>Addons:</span>{" "}
                          {pd.addonData.map((adn) => (
                            <Badge
                              key={adn.value}
                              style={{
                                backgroundColor: "#FFC107",
                                marginLeft: "2px",
                              }}
                            >
                              {adn.name}
                            </Badge>
                          ))}
                        </Col>
                        <Col>
                          Total Addon:{" "}
                          {formatCurrency(
                            pd.addonData.reduce((acc, item) => {
                              return (
                                acc +
                                item.prices.reduce((priceAcc, priceItem) => {
                                  return priceAcc + priceItem.price;
                                }, 0)
                              );
                            }, 0) * pd.qty,
                            pd.price.currency,
                            pd.price.currencySymbol,
                            userLocale
                          )}
                        </Col>
                      </>
                    )}
                  </Row>
                </ListGroup.Item>
              ))}
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              {cartItems && cartItems.couponApplied === false ? (
                <Row>
                  <Col>
                    <h6 className="fw-bold">
                      Total:{" "}
                      {cartItems &&
                        cartItems.currency &&
                        formatCurrency(
                          cartItems.cartTotal,
                          cartItems.currency.currency,
                          cartItems.currency.currencySymbol,
                          userLocale
                        )}
                    </h6>
                  </Col>
                  <Col
                    style={{ padding: "8px 5px", backgroundColor: "#dff9fb" }}
                  >
                    <h6 className="fw-bold">
                      Total Payable:{" "}
                      {cartItems &&
                        cartItems.currency &&
                        formatCurrency(
                          cartItems.cartTotal,
                          cartItems.currency.currency,
                          cartItems.currency.currencySymbol,
                          userLocale
                        )}
                    </h6>
                  </Col>
                </Row>
              ) : (
                <Row className="d-flex flex-column">
                  <Col
                    style={{ backgroundColor: "#273c75", padding: "8px 5px" }}
                  >
                    <h6 className="fw-800 m-0 text-white">
                      Price After Discount:{" "}
                      {cartItems &&
                        cartItems.currency &&
                        formatCurrency(
                          cartItems.totalAfterDiscount,
                          cartItems.currency.currency,
                          cartItems.currency.currencySymbol,
                          userLocale
                        )}
                    </h6>
                  </Col>
                  <Col
                    style={{ padding: "8px 5px", backgroundColor: "#dff9fb" }}
                  >
                    <h6 className="fw-bold m-0">
                      Total Payable:{" "}
                      {cartItems &&
                        cartItems.currency &&
                        formatCurrency(
                          cartItems.totalAfterDiscount,
                          cartItems.currency.currency,
                          cartItems.currency.currencySymbol,
                          userLocale
                        )}
                    </h6>
                  </Col>
                </Row>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      {cartItems && (
        <form
          id="payment-form"
          className="stripe-form my-4"
          onSubmit={handleSubmit}
        >
          <div id="card-element" options={cartStyle}>
            Pay with Paystack
          </div>
          <button
            className="stripe-button"
            disabled={
              processing ||
              disabled ||
              succeeded ||
              loading ||
              !intentSuccess ||
              paid
            }
          >
            <span id="button-text">
              {!intentSuccess ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                <PaystackButton {...componentProps} />
              )}
            </span>
          </button>
          <br />
          {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
          )}
          <p className={paid ? "result-message" : "result-message hidden"}>
            Payment Successful.{" "}
            <Link to="/user/orderhistory">
              See it in your purchase history.
            </Link>
          </p>
        </form>
      )}
    </FormContainer>
  );
};

export default PaystackCheckoutForm;

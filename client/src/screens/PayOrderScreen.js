import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsOrder } from "../actions/orderActions";
import {
  ORDER_CREATE_RESET,
  ORDER_STATUS_UPDATE_RESET,
  PAYMENT_STATUS_UPDATE_RESET,
} from "../constants/orderConstants";
import {
  Form,
  Row,
  Col,
  ListGroup,
  Image,
  Badge,
  Button,
} from "react-bootstrap";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Link, useNavigate, useParams } from "react-router-dom";
import Invoice from "../components/Invoice";
import Meta from "../components/Meta";
import { formatCurrency, userLocale } from "../utils";

const PayOrderScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { id: orderId } = params;

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, order, error } = orderDetails;

  const orderStatusUpdate = useSelector((state) => state.orderStatusUpdate);
  const {
    loading: loadingStatus,
    success,
    error: errorStatus,
  } = orderStatusUpdate;

  const paymentStatusUpdate = useSelector((state) => state.paymentStatusUpdate);
  const {
    loading: loadingPayment,
    success: successPayment,
    error: errorPayment,
  } = paymentStatusUpdate;

  const orderCreate = useSelector((state) => state.orderCreate);
  const {
    order: orderCreateOrder,
    success: orderCreateSuccess,
    loading: orderCreateLoading,
    error: errorCreateOrder,
  } = orderCreate;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    if (!order || order._id !== orderId || success || successPayment) {
      dispatch(detailsOrder(orderId));
      dispatch({ type: ORDER_CREATE_RESET });
      dispatch({ type: ORDER_STATUS_UPDATE_RESET });
      dispatch({ type: PAYMENT_STATUS_UPDATE_RESET });
    }
  }, [userInfo, orderId, order, dispatch, success, successPayment, navigate]);

  const handleCashOnDelivery = () => {
    // const payload = {
    //   amount:
    //     cartItems?.couponApplied === true
    //       ? Number(cartItems.totalAfterDiscount * 100)
    //       : Number(cartItems?.cartTotal * 100),
    //   status: "pending",
    // };
    // dispatch(createOrder(payload, "Cash On Delivery"));
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <Meta title="Food Store | Pay Order" />
      {userInfo && userInfo.role !== "admin" && (
        <Link to="/user/orderhistory" className="btn btn-dark my-3">
          Go Back
        </Link>
      )}

      <h3>Order: {order._id}</h3>
      <Row className="orderDetails">
        <Col md={8}>
          <ListGroup style={{ backgroundColor: "#ced6e0" }}>
            <ListGroup.Item>
              <Row className="d-flex flex-lg-row flex-md-row flex-sm-column flex-xs-column">
                <Col>
                  <h4>Shipping</h4>
                  <p>
                    <strong>Name: </strong> {order.orderdBy?.name}
                  </p>
                  <p>
                    <strong>Email: </strong>{" "}
                    <a href={`mailto:${order.orderdBy?.email}`}>
                      {order.orderdBy?.email}
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong>
                    {order.orderdBy?.shipping.address},{" "}
                    {order.orderdBy?.shipping.city}{" "}
                    {order.orderdBy?.shipping.postcode},{" "}
                    {order.orderdBy?.shipping.country}
                  </p>
                </Col>
                <Col className="d-flex justify-content-md-end align-items-start justify-content-sm-start">
                  <PDFDownloadLink
                    document={<Invoice order={order} />}
                    fileName="invoice.pdf"
                    className="btn btn-sm btn-primary"
                  >
                    Download Invoice
                  </PDFDownloadLink>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <h4>Order Status</h4>
              {order.orderStatus && order.orderStatus === "Not Processed" ? (
                <Message variant="dark">Not Processed</Message>
              ) : order.orderStatus === "Processing" ? (
                <Message variant="info">Processing</Message>
              ) : order.orderStatus === "Dispatched" ? (
                <Message variant="warning">Dispatched</Message>
              ) : order.orderStatus === "Completed" ? (
                <Message variant="success">Completed</Message>
              ) : (
                <Message variant="danger">Cancelled</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h4>Payment Method</h4>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.paymentIntent &&
              order.paymentIntent?.status === "succeeded" ? (
                <Message variant="success">
                  Paid on : {new Date(order.createdAt).toLocaleDateString()}
                </Message>
              ) : order.paymentIntent?.status === "pending" ? (
                <Message variant="dark">Pending</Message>
              ) : (
                <Message variant="danger">
                  Error Payment, please contact site owner
                </Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h4>Order Items</h4>
              {order.products?.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup>
                  {order.products?.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.product.image.url}
                            alt={item.product.title}
                            fluid
                          />
                        </Col>
                        <Col md={10}>
                          <Row className="d-flex flex-column">
                            <Col>
                              <Row className="d-flex flex-row">
                                <Col md={9}>
                                  <span style={{ fontWeight: "900" }}>
                                    {index + 1}){" "}
                                  </span>
                                  <span style={{ fontWeight: "600" }}>
                                    <Link to={`/product/${item.product.slug}`}>
                                      {item.product.title}
                                    </Link>{" "}
                                    x {item.qty}
                                  </span>
                                </Col>
                                <Col md={3}>
                                  <span style={{ fontWeight: "600" }}>
                                    =
                                    {formatCurrency(
                                      item.qty * item.price.price,
                                      item.price.currency,
                                      item.price.currencySymbol,
                                      userLocale
                                    )}
                                  </span>
                                </Col>
                              </Row>
                            </Col>
                            {item.variableData && (
                              <Col>
                                <span style={{ fontSize: "14px" }}>Type:</span>{" "}
                                <Badge
                                  style={{
                                    backgroundColor: "#b33939",
                                    marginLeft: "2px",
                                  }}
                                >
                                  {item.variableData.name}
                                </Badge>
                              </Col>
                            )}
                            {item.addonData?.length > 0 && (
                              <>
                                <Col>
                                  <span style={{ fontSize: "14px" }}>
                                    Addons:
                                  </span>{" "}
                                  {item.addonData.map((adn) => (
                                    <Badge
                                      key={adn._id}
                                      style={{
                                        backgroundColor: "#FFC107",
                                        marginLeft: "2px",
                                      }}
                                    >
                                      {adn.name.split("-")[0]}
                                    </Badge>
                                  ))}
                                </Col>
                                <Col>
                                  Total Addon:{" "}
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
                                    }, 0),
                                    item.price.currency,
                                    item.price.currencySymbol,
                                    userLocale
                                  )}
                                </Col>
                              </>
                            )}
                          </Row>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup style={{ backgroundColor: "#ced6e0" }}>
            <ListGroup.Item>
              <h4>Order Summary</h4>
            </ListGroup.Item>
            {order.couponApplied ? (
              <>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b>Total: </b>
                    </Col>
                    <Col>
                      <del>
                        {formatCurrency(
                          order.cartTotal,
                          order.currency && order.currency.currency,
                          order.currency && order.currency.currencySymbol,
                          userLocale
                        )}
                      </del>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b>Total After Discount:</b>
                    </Col>
                    <Col>
                      {order.currency && order.currency.currencySymbol}
                      {order.totalAfterDiscount}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b>Total Payable: </b>
                    </Col>
                    <Col>
                      {order.currency &&
                        formatCurrency(
                          order.totalAfterDiscount,
                          order.currency.currency,
                          order.currency.currencySymbol,
                          userLocale
                        )}
                    </Col>
                  </Row>
                </ListGroup.Item>
              </>
            ) : (
              <>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b>Total: </b>
                    </Col>
                    <Col>
                      {order.currency &&
                        formatCurrency(
                          order.cartTotal,
                          order.currency.currency,
                          order.currency.currencySymbol,
                          userLocale
                        )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b>Total Payable: </b>
                    </Col>
                    <Col>
                      {order.currency &&
                        formatCurrency(
                          order.cartTotal,
                          order.currency.currency,
                          order.currency.currencySymbol,
                          userLocale
                        )}
                    </Col>
                  </Row>
                </ListGroup.Item>
              </>
            )}
          </ListGroup>

          {order.paymentIntent &&
            order.paymentIntent?.status !== "succeeded" && (
              <ListGroup className="m-2">
                <ListGroup.Item>
                  {loadingStatus && <Loader className="size-sm" />}
                  {errorStatus && (
                    <Message variant="danger">{errorStatus}</Message>
                  )}
                  <Col className="m-1">
                    <ListGroup>
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
                    </ListGroup>
                  </Col>
                  <Col>
                    <ListGroup.Item>
                      {paymentMethod && paymentMethod === "Stripe" ? (
                        <Button
                          disabled={userInfo && !userInfo.shipping}
                          variant={
                            userInfo && !userInfo.shipping ? "dark" : "success"
                          }
                          className="m-2"
                          onClick={() =>
                            navigate(`/placeorder/${paymentMethod}/${orderId}`)
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
                          className="m-2"
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
                          className="m-2"
                          onClick={() =>
                            navigate(`/placeorder/${paymentMethod}/${orderId}`)
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
                          className="m-2"
                          onClick={() =>
                            navigate(`/placeorder/${paymentMethod}/${orderId}`)
                          }
                        >
                          Place Order (Flutterwave)
                        </Button>
                      ) : (
                        <Button disabled className="m-3" variant={"dark"}>
                          No Payment Method Selected
                        </Button>
                      )}
                      {errorCreateOrder && (
                        <Message variant="danger">{errorCreateOrder}</Message>
                      )}
                    </ListGroup.Item>
                  </Col>
                </ListGroup.Item>
              </ListGroup>
            )}
        </Col>
      </Row>
    </>
  );
};

export default PayOrderScreen;

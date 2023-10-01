import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import StripeCheckoutForm from "../components/form/StripeCheckoutForm";
import PaystackCheckoutForm from "../components/form/PaystackCheckoutForm";
import FlutterwaveCheckoutForm from "../components/form/FlutterwaveCheckoutForm";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Meta from "../components/Meta";
import axios from "axios";
import { detailsOrder } from "../actions/orderActions";

const PlaceOrderScreen = () => {
  const [promise, setPromise] = useState(null);
  const [paymentIntent, setPaymentIntent] = useState({});
  const [paymentPayload, setPaymentPayload] = useState({});
  const [paymentError, setPaymentError] = useState(null);
  const [intentSuccess, setIntentSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { gateway, orderId } = useParams();

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const cartList = useSelector((state) => state.cartList);
  const { cartItems } = cartList;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, order, error } = orderDetails;

  useEffect(() => {
    if (gateway === "Stripe") {
      const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
      setPromise(promise);
    }
  }, [gateway]);

  useEffect(() => {
    if (orderId) {
      dispatch(detailsOrder(orderId));
    }
  }, [dispatch, orderId]);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    if (cartItems === null && !orderId) {
      navigate("/");
    }
  }, [userInfo, cartItems, navigate, orderId]);

  useEffect(() => {
    const getPaystack = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(`/api/paystack-intent`, {}, config);
      if (!data.error) {
        setPaymentIntent(data);
        setIntentSuccess(true);
      } else if (data.error) {
        setPaymentError(`Paystack Error: ${data.error.message}`);
      }
    };

    const getFlutterwave = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(`/api/flutterwave-intent`, {}, config);
      if (!data.error) {
        setPaymentIntent(data);
        setIntentSuccess(true);
      } else if (data.error) {
        setPaymentError(`Flutterwave Error: ${data.error.message}`);
      }
    };

    if (gateway === "Paystack" && !orderId) {
      getPaystack();
    } else if (gateway === "Flutterwave" && !orderId) {
      getFlutterwave();
    } else if (Object.keys(order).length !== 0) {
      let intent = order ? order.paymentIntent : {};
      intent.currency = order ? order.currency : {};
      setPaymentIntent(intent);
      setIntentSuccess(true);
      setPaymentPayload(order);
    }
  }, [gateway, order, orderId, userInfo.token]);

  if (gateway === "Stripe") {
    return (
      <Elements stripe={promise}>
        <Meta title="Food Store | Place Order" />
        <StripeCheckoutForm
          userInfo={userInfo}
          cartItems={orderId ? paymentPayload : cartItems}
          orderId={orderId}
        />
      </Elements>
    );
  } else if (gateway === "Paystack") {
    return (
      <>
        <Meta title="Food Store | Place Order" />
        <PaystackCheckoutForm
          userInfo={userInfo}
          cartItems={orderId ? paymentPayload : cartItems}
          intent={paymentIntent}
          intentSuccess={intentSuccess}
          error={paymentError}
          orderId={orderId}
        />
      </>
    );
  } else if (gateway === "Flutterwave") {
    return (
      <>
        <Meta title="Food Store | Place Order" />
        <FlutterwaveCheckoutForm
          userInfo={userInfo}
          cartItems={orderId ? paymentPayload : cartItems}
          intent={paymentIntent}
          intentSuccess={intentSuccess}
          error={paymentError}
          orderId={orderId}
        />
      </>
    );
  }

  return <text>No Gateway Selected</text>;
};

export default PlaceOrderScreen;

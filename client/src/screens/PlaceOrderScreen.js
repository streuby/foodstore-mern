import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import StripeCheckoutForm from "../components/form/StripeCheckoutForm";
import PaystackCheckoutForm from "../components/form/PaystackCheckoutForm";
import FlutterwaveCheckoutForm from "../components/form/FlutterwaveCheckoutForm";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Meta from "../components/Meta";
import axios from "axios";

const PlaceOrderScreen = () => {
  const [promise, setPromise] = useState(null);
  const [paymentIntent, setPaymentIntent] = useState({});
  const [paymentError, setPaymentError] = useState(null);
  const [intentSuccess, setIntentSuccess] = useState(false);
  const navigate = useNavigate();

  const { gateway } = useParams();

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const cartList = useSelector((state) => state.cartList);
  const { cartItems } = cartList;

  useEffect(() => {
    if (gateway === "Stripe") {
      const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
      setPromise(promise);
    }
  }, [gateway]);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    if (cartItems === null) {
      navigate("/login");
    }
  }, [userInfo, cartItems, navigate]);

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

    if (gateway === "Paystack") {
      getPaystack();
    }
  }, [gateway, userInfo.token]);

  useEffect(() => {
    console.log(paymentIntent);
  }, [paymentIntent]);

  if (gateway === "Stripe") {
    return (
      <Elements stripe={promise}>
        <Meta title="Food Store | Place Order" />
        <StripeCheckoutForm userInfo={userInfo} cartItems={cartItems} />
      </Elements>
    );
  } else if (gateway === "Paystack") {
    return (
      <>
        <Meta title="Food Store | Place Order" />
        <PaystackCheckoutForm
          userInfo={userInfo}
          cartItems={cartItems}
          intent={paymentIntent}
          intentSuccess={intentSuccess}
          error={paymentError}
        />
      </>
    );
  } else if (gateway === "Flutterwave") {
    return (
      <>
        <Meta title="Food Store | Place Order" />
        <FlutterwaveCheckoutForm
          userInfo={userInfo}
          cartItems={cartItems}
          intent={paymentIntent}
          intentSuccess={intentSuccess}
          error={paymentError}
        />
      </>
    );
  }

  return <text>No Gateway Selected</text>;
};

export default PlaceOrderScreen;

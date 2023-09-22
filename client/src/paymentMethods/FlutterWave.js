import React, { useState, useEffect } from "react";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import axios from "axios";
import { useDispatch } from "react-redux";

import { payOrder } from "../actions/orderActions";

import { Button } from "react-bootstrap";

const FlutterWave = ({ order, orderId }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState(parseInt(0));
  const [fwConfig, setfwConfig] = useState({});
  const [config, setConfig] = useState({});
  const [flutterwavePublicKey, setflutterwavePublicKey] = useState("");
  const [logo, setLogo] = useState("");
  const [currency, setCurrency] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    let ignore = false;
    // Paystack
    const setFlutterwave = async () => {
      const { data: publicKey } = await axios.get("/api/config/flutterwave");
      setEmail(order.user.email);
      setName(order.user.name);
      setAmount(order.totalPrice * 100);
      setflutterwavePublicKey(publicKey);
      setCurrency(order.orderCurrency);
    };

    const getLogo = async () => {
      const { data: dLogo } = await axios.get(
        "/api/logo/1683383826284-shopy-black_no_brand_final.png"
      );
      setLogo(dLogo);
    };

    if (order && !ignore) {
      setFlutterwave();
      getLogo();
    }
    return () => (ignore = true);
  }, [order]);

  useEffect(() => {
    let ignore = false;
    // Paystack
    if (order && !ignore) {
      setConfig({
        public_key: flutterwavePublicKey,
        tx_ref: orderId,
        amount: amount * 0.01,
        currency: currency,
        payment_options: "card,mobilemoney,ussd,banktransfer",
        customer: {
          email: email,
          phone_number: phone,
          name: name,
        },
        customizations: {
          title: "Shopy",
          description: "Custom discription",
          logo: logo,
        },
      });
    }

    return () => (ignore = true);
  }, [order, email, amount, name, phone, dispatch, orderId, flutterwavePublicKey, currency, logo]);

  const handleFlutterPayment = useFlutterwave(config);
  return (
    <div>
      <Button type="button" variant="outline-dark">
        <button
          onClick={() => {
            console.log("Config", config);
            handleFlutterPayment({
              callback: (paymentResult) => {
                try {
                  if (paymentResult.charge_response_code === "00") {
                    paymentResult.gateway = "flutterwave";
                    dispatch(payOrder(orderId, paymentResult));
                  }
                } catch (error) {
                  throw new Error("Error: ", error);
                }
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {},
            });
          }}
        >
          Pay with Flutterwave
        </button>
      </Button>
      {/* <FlutterWaveButton {...fwConfig} /> */}
    </div>
  );
};

export default FlutterWave;

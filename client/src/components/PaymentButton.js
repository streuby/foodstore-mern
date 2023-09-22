import React from "react";
import PayStack from "../paymentMethods/PayStack";
import PaymentOnDelivery from "../paymentMethods/PaymentOnDelivery";
import FlutterWave from "../paymentMethods/FlutterWave";

import { useSelector } from "react-redux";

let methods = {
  Paystack: { button: PayStack, text: "Pay with Paystack" },
  Flutterwave: { button: FlutterWave, text: "Pay with Flutterwave" },
  PaymentOnDelivery: {
    button: PaymentOnDelivery,
    text: "Cash On Delivery (COD)",
  },
};
let available = Object.keys(methods);

const PaymentButton = ({ orderId }) => {
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order } = orderDetails;

  if (order.orderCurrency === "USD") {
    methods = {
      Flutterwave: FlutterWave,
      Paymentondelivery: PaymentOnDelivery,
    };
    available = Object.keys(methods);
  }
  const Preferred = methods[order.paymentMethod];

  return <Preferred order={order} orderId={orderId} />;
};

export { available, PaymentButton };

import React from "react";
import PayStack from "./PayStack";
import FlutterWave from "./FlutterWave";
import { ListGroup } from "react-bootstrap";

const PaymentOnDelivery = ({ order, orderId }) => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          <FlutterWave order={order} orderId={orderId} />
        </ListGroup.Item>
        <ListGroup.Item>
          <PayStack order={order} orderId={orderId} />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default PaymentOnDelivery;

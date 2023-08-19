import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrderAdmin } from "../../actions/orderActions";
import { Col, Row } from "react-bootstrap";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

import OrderListTable from "../../components/OrderListTable";
import { useNavigate } from "react-router-dom";

const ManageOrderScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const adminOrderList = useSelector((state) => state.adminOrderList);
  const { orderList, loading, error } = adminOrderList;

  useEffect(() => {
    if (userInfo && userInfo.role === "admin") {
      dispatch(listOrderAdmin());
    } else {
      navigate("/login");
    }
  }, [userInfo, dispatch, navigate]);
  return (
    <>
      <Row>
        <Col>
          <h3>Customers Orders</h3>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <OrderListTable orderList={orderList} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default ManageOrderScreen;

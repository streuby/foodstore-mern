import React, { useEffect } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { listUsers } from "../../actions/userActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useNavigate } from "react-router-dom";

const UserListScreen = () => {
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo.role !== "admin") {
      navigate("/");
    } else {
      dispatch(listUsers());
    }
  }, [dispatch, userInfo, navigate]);

  const userList = useSelector((state) => state.userList);
  const { loading: loadingUserList, users, error: errorUserList } = userList;
  return loadingUserList ? (
    <Loader />
  ) : errorUserList ? (
    <Message variant="danger">{errorUserList}</Message>
  ) : (
    <Row>
      <Col>
        <Table
          striped
          bordered
          hover
          responsive
          className="table-sm"
          variant="dark"
        >
          <thead>
            <tr>
              <th>SL</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>JOINED ON</th>
              <th>ROLE</th>
              <th>ORDERS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>{user.role}</td>
                <td></td>
                <td>
                  <Button
                    variant="dark"
                    onClick={() => navigate(`/admin/user/${user._id}`)}
                  >
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserListScreen;

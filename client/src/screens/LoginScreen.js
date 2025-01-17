import React, { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Form, Button, Row, Col } from "react-bootstrap";
import { auth, googleAuthProvider } from "../firebase";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../actions/userActions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Meta from "../components/Meta";

const LoginScreen = () => {
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const userLogIn = useSelector((state) => state.userLogIn);
  const { loading, userInfo, error } = userLogIn;

  // const redirect = location.search ? location.search.split('=')[1] : '/'
  useEffect(() => {
    const intended = location;
    if (intended) {
      return;
    } else {
      if (userInfo) {
        navigate("/");
      }
    }
  }, [location, navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password.length >= 8) {
      try {
        const { user } = await auth.signInWithEmailAndPassword(
          userEmail,
          password
        );
        dispatch(logInUser(user));
        setMessage("");
        const intended = location.state;
        if (intended) {
          navigate(intended.from);
        } else {
          navigate("/");
        }
      } catch (error) {
        setMessage(error.message);
      }
    } else {
      setMessage("password must be 8 digit long");
    }
  };

  const googleLogin = async () => {
    try {
      const { user } = await auth.signInWithPopup(googleAuthProvider);
      dispatch(logInUser(user));
      setMessage("");
      const intended = location.state;
      if (intended) {
        navigate(intended.from);
      } else {
        navigate("/");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <FormContainer>
      <Meta title="Food Store | Login" />
      {loading && <Loader />}
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="submit">
          <Button
            type="submit"
            variant="light"
            className="mt-3"
            style={{ width: "-webkit-fill-available" }}
            disabled={!userEmail || !password}
          >
            Sign In with Email and Password
          </Button>
        </Form.Group>
      </Form>
      <Form.Group controlId="submit">
        <Button
          type="submit"
          variant="info"
          className="my-3"
          style={{ width: "-webkit-fill-available" }}
          onClick={googleLogin}
        >
          <FontAwesomeIcon icon={faGoogle} /> Sign In with Google
        </Button>
      </Form.Group>
      <Row className="py-3">
        <Col md={6} sm={12}>
          New Here? <Link to="/register">Register</Link>
        </Col>
        <Col md={6} sm={12}>
          <Link
            to="/forgot/password"
            className="float-end text-decoration-none text-danger"
          >
            Forgot Password?
          </Link>
        </Col>
      </Row>

      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
    </FormContainer>
  );
};

export default LoginScreen;

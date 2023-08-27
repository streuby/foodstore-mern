import React, { useEffect, useState } from "react";
import FormContainer from "../../components/FormContainer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { detailsCurrency, updateCurrency } from "../../actions/currencyActions";
import {
  CURRENCY_UPDATE_RESET,
  CURRENCY_DETAILS_RESET,
} from "../../constants/currencyConstants";
const CurrencyEditScreen = () => {
  const [name, setName] = useState("");
  const [shortname, setShortname] = useState("");
  const [isocode, setIsocode] = useState("");
  const [symbol, setSymbol] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { id: currencyId } = params;

  //check logged in user

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const currencyDetails = useSelector((state) => state.currencyDetails);
  const { currencyData, loading, error } = currencyDetails;

  const currencyUpdate = useSelector((state) => state.currencyUpdate);
  const {
    success: successUpdate,
    loading: loadingUpdate,
    error: errorUpdate,
  } = currencyUpdate;

  useEffect(() => {
    if (userInfo && userInfo.role !== "admin") {
      navigate("/");
    }

    if (successUpdate) {
      dispatch({ type: CURRENCY_UPDATE_RESET });
      dispatch({ type: CURRENCY_DETAILS_RESET });
      navigate("/admin/currency");
    } else {
      if (!currencyData.name || currencyData._id !== currencyId) {
        dispatch(detailsCurrency(currencyId));
      } else {
        setName(currencyData.name);
        setIsocode(currencyData.isocode);
        setShortname(currencyData.shortname);
        setSymbol(currencyData.symbol);
      }
    }
  }, [
    dispatch,
    successUpdate,
    userInfo,
    navigate,
    currencyData.name,
    currencyData._id,
    currencyData.isocode,
    currencyData.shortname,
    currencyData.symbol,
    currencyId,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateCurrency(shortname, isocode, name, symbol, currencyId));
  };

  return (
    <>
      <Link to="/admin/attribute" className="btn btn-dark my-3">
        Go Back
      </Link>
      <FormContainer>
        {successUpdate && (
          <Message variant="success">Attribute Updated</Message>
        )}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        <Form onSubmit={submitHandler} className="my-5">
          <Form.Group controlId="name">
            <Form.Label>Create Currency</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name (EX: NIGERIA NAIRA)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="isocode">
            <Form.Label>ISO Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Currency ISO Code"
              value={isocode}
              required
              onChange={(e) => setIsocode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="shortname">
            <Form.Label>Numeric Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Numeric Code"
              value={shortname}
              required
              onChange={(e) => setShortname(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="symbol">
            <Form.Label>Currency Symbol</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Currency Symbol"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="my-3"
            disabled={loading}
          >
            Update {loadingUpdate && <Loader size="size-sm" />}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default CurrencyEditScreen;

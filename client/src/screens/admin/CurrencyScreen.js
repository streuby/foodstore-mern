import React, { useEffect, useState } from "react";
import FormContainer from "../../components/FormContainer";
import { Form, Button, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "react-router-bootstrap";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  createCurrency,
  deleteCurrency,
  listCurrency,
} from "../../actions/currencyActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ItemSearch from "../../components/ItemSearch";
import { useNavigate } from "react-router-dom";
const AttributeScreen = () => {
  const [name, setName] = useState("");
  const [shortname, setShortname] = useState("");
  const [isocode, setIsocode] = useState("");
  const [symbol, setSymbol] = useState("");

  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  //check logged in user
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  //showAttribute list
  const currencyList = useSelector((state) => state.currencyList);
  const {
    loading: loadingCurrerncy,
    currencies,
    error: errorCurrency,
  } = currencyList;

  const dispatch = useDispatch();

  //delete attribute
  const currencyDelete = useSelector((state) => state.currencyDelete);
  const { success: successDelete } = currencyDelete;

  //create attribute
  const currencyCreate = useSelector((state) => state.currencyCreate);
  const { loading, success, error } = currencyCreate;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createCurrency(shortname, isocode, name, symbol));
    setName("");
    setShortname("");
    setIsocode("");
    setSymbol("");
  };
  const searched = (keyword) => (item) =>
    item.name.toLowerCase().includes(keyword);

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure?")) {
      dispatch(deleteCurrency(id));
    }
  };

  useEffect(() => {
    if (userInfo && userInfo.role !== "admin") {
      navigate("/");
    }
    dispatch(listCurrency());
  }, [dispatch, userInfo, success, successDelete, navigate]);

  return (
    <>
      <FormContainer>
        {success && <Message variant="success">Currency Added</Message>}
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
            Create {loading && <Loader size="size-sm" />}
          </Button>
        </Form>
      </FormContainer>
      <Row>
        {loadingCurrerncy ? (
          <Loader />
        ) : errorCurrency ? (
          <Message variant="danger">{errorCurrency}</Message>
        ) : (
          <>
            <ItemSearch setKeyword={setKeyword} keyword={keyword} />
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
                  <th>NAME</th>
                  <th>ISO CODE</th>
                  <th>NUMERIC CODE</th>
                  <th>SYMBOL</th>
                </tr>
              </thead>
              <tbody>
                {currencies.filter(searched(keyword)).map((currency) => (
                  <tr key={currency._id}>
                    <td>{currency.name}</td>
                    <td>{currency.isocode}</td>
                    <td>{currency.shortname}</td>
                    <td>{currency.symbol}</td>
                    <td>
                      <LinkContainer
                        to={`/admin/currency/${currency._id}/edit`}
                      >
                        <Button variant="dark" className="btn-sm">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </LinkContainer>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(currency._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </Row>
    </>
  );
};

export default AttributeScreen;

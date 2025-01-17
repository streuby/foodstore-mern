import React, { useEffect, useState } from "react";
import FormContainer from "../../components/FormContainer";
import { Form, Button, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "react-router-bootstrap";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  createAddon,
  deleteAddon,
  listAddon,
} from "../../actions/addonActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ItemSearch from "../../components/ItemSearch";
import CurrencySelect from "../../components/form/CurrencySelect";
import { useNavigate } from "react-router-dom";
import { listCurrency } from "../../actions/currencyActions";
import { formatCurrency, userLocale } from "../../utils";

const AddonScreen = () => {
  const [addon, setAddon] = useState("");
  const [price, setPrice] = useState("");
  const [keyword, setKeyword] = useState("");
  const [prices, setPrices] = useState({});
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);

  const navigate = useNavigate;

  //check logged in user
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  //showAddon list
  const addonList = useSelector((state) => state.addonList);
  const { loading: loadingAddon, addons, error: errorAddon } = addonList;

  const dispatch = useDispatch();

  //delete addon
  const addonDelete = useSelector((state) => state.addonDelete);
  const { success: successDelete } = addonDelete;

  //create addon
  const addonCreate = useSelector((state) => state.addonCreate);
  const { loading, success, error } = addonCreate;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createAddon(addon, prices));
    setAddon("");
    setPrice("");
  };
  const searched = (keyword) => (addon) =>
    addon.name.toLowerCase().includes(keyword);

  const deleteHandler = (slug) => {
    if (window.confirm("Are You Sure?")) {
      dispatch(deleteAddon(slug));
    }
  };

  useEffect(() => {
    if (userInfo && userInfo.role !== "admin") {
      navigate("/");
    }
    dispatch(listAddon());
    dispatch(listCurrency());
  }, [dispatch, userInfo, success, successDelete, navigate]);

  const updatePrices = (key, symbol, value) => {
    setPrices({ [key]: parseInt(value) });
  };

  return (
    <>
      <FormContainer>
        {success && <Message variant="success">Addon Added</Message>}
        {error && <Message variant="danger">{error}</Message>}
        <Form onSubmit={submitHandler} className="my-5">
          <Form.Group controlId="addon">
            <Form.Label>Create Addon</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter addon"
              value={addon}
              onChange={(e) => setAddon(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <CurrencySelect
            selectedCurrencies={selectedCurrencies}
            setSelectedCurrencies={setSelectedCurrencies}
            multiselect={false}
          />
          {selectedCurrencies.name && (
            <Form.Group controlId="price">
              <Form.Label>{`${selectedCurrencies.name} Price`}</Form.Label>
              <Form.Control
                type="number"
                placeholder={`Enter ${selectedCurrencies.name} price`}
                value={
                  selectedCurrencies.isocode in prices &&
                  prices[selectedCurrencies.isocode]
                }
                required
                onChange={(e) =>
                  updatePrices(
                    selectedCurrencies.isocode,
                    selectedCurrencies.symbol,
                    e.target.value
                  )
                }
              ></Form.Control>
            </Form.Group>
          )}
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
        {loadingAddon ? (
          <Loader />
        ) : errorAddon ? (
          <Message variant="danger">{errorAddon}</Message>
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
                  <th>SLUG</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {addons.filter(searched(keyword)).map((addon) => (
                  <tr key={addon._id}>
                    <td>{addon.name}</td>
                    <td>{addon.slug}</td>
                    <td>
                      {`${formatCurrency(
                        addon.prices[0].price,
                        addon.prices[0].currency,
                        addon.prices[0].currencySymbol,
                        userLocale
                      )}`}
                    </td>
                    <td>
                      <LinkContainer to={`/admin/addon/${addon.slug}/edit`}>
                        <Button variant="dark" className="btn-sm">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </LinkContainer>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(addon.slug)}
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

export default AddonScreen;

import React, { useEffect, useState } from "react";
import FormContainer from "../../components/FormContainer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { detailsAddon, updateAddon } from "../../actions/addonActions";
import { ADDON_UPDATE_RESET } from "../../constants/addonConstants";
import CurrencySelect from "../../components/form/CurrencySelect";
const AddonEditScreen = () => {
  const [addon, setAddon] = useState("");
  const [prices, setPrices] = useState({});
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { slug: addonSlug } = params;

  //check logged in user

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const addonDetails = useSelector((state) => state.addonDetails);
  const { addonData, loading, error } = addonDetails;

  const addonUpdate = useSelector((state) => state.addonUpdate);
  const {
    success: successUpdate,
    loading: loadingUpdate,
    error: errorUpdate,
  } = addonUpdate;

  useEffect(() => {
    if (userInfo && userInfo.role !== "admin") {
      navigate("/");
    }

    if (successUpdate) {
      dispatch({ type: ADDON_UPDATE_RESET });
      navigate("/admin/addon");
    } else {
      if (!addonData.name || addonData.slug !== addonSlug) {
        dispatch(detailsAddon(addonSlug));
      } else {
        setAddon(addonData.name);
        setPrices(
          addonData.prices.reduce((result, item) => {
            result[item.currency] = item.price;
            return result;
          }, {})
        );
      }
    }
  }, [dispatch, addonSlug, addonData, successUpdate, userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateAddon(addon, prices, addonSlug));
    dispatch(detailsAddon(addonSlug));
  };

  const updatePrices = (key, symbol, value) => {
    setPrices({ [key]: parseInt(value) });
  };

  return (
    <>
      <Link to="/admin/addon" className="btn btn-dark my-3">
        Go Back
      </Link>
      <FormContainer>
        {successUpdate && <Message variant="success">Addon Updated</Message>}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        <Form onSubmit={submitHandler} className="my-5">
          <Form.Group controlId="Update addon">
            <Form.Label>Update Addon</Form.Label>
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
            Update {loadingUpdate && <Loader size="size-sm" />}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default AddonEditScreen;

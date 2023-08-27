import axios from "axios";
import {
  CURRENCY_CREATE_FAIL,
  CURRENCY_CREATE_REQUEST,
  CURRENCY_CREATE_SUCCESS,
  CURRENCY_DELETE_FAIL,
  CURRENCY_DELETE_REQUEST,
  CURRENCY_DELETE_SUCCESS,
  CURRENCY_DETAILS_FAIL,
  CURRENCY_DETAILS_REQUEST,
  CURRENCY_DETAILS_SUCCESS,
  CURRENCY_LIST_FAIL,
  CURRENCY_LIST_REQUEST,
  CURRENCY_LIST_SUCCESS,
  CURRENCY_UPDATE_FAIL,
  CURRENCY_UPDATE_REQUEST,
  CURRENCY_UPDATE_SUCCESS,
} from "../constants/currencyConstants";

export const createCurrency =
  (shortname, isocode, name, symbol) => async (dispatch, getState) => {
    try {
      dispatch({ type: CURRENCY_CREATE_REQUEST });
      const {
        userLogIn: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.post(
        `/api/currency`,
        { shortname: shortname, isocode: isocode, name: name, symbol: symbol },
        config
      );

      dispatch({ type: CURRENCY_CREATE_SUCCESS });
    } catch (error) {
      dispatch({
        type: CURRENCY_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listCurrency = () => async (dispatch) => {
  try {
    dispatch({ type: CURRENCY_LIST_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/currency`, config);

    dispatch({ type: CURRENCY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CURRENCY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteCurrency = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CURRENCY_DELETE_REQUEST });

    const {
      userLogIn: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`/api/currency/${id}`, config);

    dispatch({ type: CURRENCY_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: CURRENCY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailsCurrency = (id) => async (dispatch) => {
  try {
    dispatch({ type: CURRENCY_DETAILS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/currency/${id}`, config);

    dispatch({ type: CURRENCY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CURRENCY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateCurrency =
  (shortname, isocode, name, symbol, currencyId) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: CURRENCY_UPDATE_REQUEST });

      const {
        userLogIn: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.put(
        `/api/currency/${currencyId}`,
        { shortname: shortname, isocode: isocode, name: name, symbol: symbol },
        config
      );

      dispatch({ type: CURRENCY_UPDATE_SUCCESS });
    } catch (error) {
      dispatch({
        type: CURRENCY_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

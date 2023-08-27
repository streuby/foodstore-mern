import {
  CURRENCY_CREATE_FAIL,
  CURRENCY_CREATE_REQUEST,
  CURRENCY_CREATE_SUCCESS,
  CURRENCY_DELETE_FAIL,
  CURRENCY_DELETE_REQUEST,
  CURRENCY_DELETE_SUCCESS,
  CURRENCY_DETAILS_FAIL,
  CURRENCY_DETAILS_REQUEST,
  CURRENCY_DETAILS_RESET,
  CURRENCY_DETAILS_SUCCESS,
  CURRENCY_LIST_FAIL,
  CURRENCY_LIST_REQUEST,
  CURRENCY_LIST_SUCCESS,
  CURRENCY_UPDATE_FAIL,
  CURRENCY_UPDATE_REQUEST,
  CURRENCY_UPDATE_RESET,
  CURRENCY_UPDATE_SUCCESS,
} from "../constants/currencyConstants";

export const currencyCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CURRENCY_CREATE_REQUEST:
      return { loading: true };
    case CURRENCY_CREATE_SUCCESS:
      return { loading: false, success: true };
    case CURRENCY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const currencyListReducer = (state = { currencies: [] }, action) => {
  switch (action.type) {
    case CURRENCY_LIST_REQUEST:
      return { ...state, loading: true };
    case CURRENCY_LIST_SUCCESS:
      return { loading: false, currencies: action.payload };
    case CURRENCY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const currencyDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CURRENCY_DELETE_REQUEST:
      return { loading: true };
    case CURRENCY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CURRENCY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const currencyDetailsReducer = (
  state = { currencyData: {} },
  action
) => {
  switch (action.type) {
    case CURRENCY_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CURRENCY_DETAILS_SUCCESS:
      return { loading: false, currencyData: action.payload };
    case CURRENCY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case CURRENCY_DETAILS_RESET:
      return { loading: false, currencyData: {} };
    default:
      return state;
  }
};

export const currencyUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CURRENCY_UPDATE_REQUEST:
      return { loading: true };
    case CURRENCY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CURRENCY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CURRENCY_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

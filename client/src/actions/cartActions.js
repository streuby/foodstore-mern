import axios from "axios";
import {
  APPLY_COUPON_FAIL,
  APPLY_COUPON_REQUEST,
  APPLY_COUPON_SUCCESS,
  CANCEL_COUPON_FAIL,
  CANCEL_COUPON_REQUEST,
  CANCEL_COUPON_SUCCESS,
  CART_ADD_ITEM,
  CART_DB_FAIL,
  CART_DB_REQUEST,
  CART_DB_SUCCESS,
  CART_LIST_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_REMOVE_ITEM,
  DB_CART_CLEAR_FAIL,
  DB_CART_CLEAR_REQUEST,
  DB_CART_CLEAR_SUCCESS,
  CART_REMOVE_ONE,
  CART_ADD_ONE,
} from "../constants/cartConstants";

export const addToCart =
  (slug, price, qty, variable = null, addonPd = null) =>
  async (dispatch, getState) => {
    if (slug || qty || variable || addonPd) {
      const { data } = await axios.get(`/api/product/${slug}`);

      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          product: data._id,
          slug: data.slug,
          title: data.title,
          image: data.image.url,
          qty,
          variableData: variable,

          addonData: addonPd,
          price: price,
        },
      });
    }

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const addOneToCart = (index) => (dispatch, getState) => {
  dispatch({
    type: CART_ADD_ONE,
    payload: index,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (slug) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: slug,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeOneFromCart = (index) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ONE,
    payload: index,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const dbSaveCart =
  (cartItems, totalPrice, currency) => async (dispatch, getState) => {
    try {
      dispatch({ type: CART_DB_REQUEST });

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
        `/api/cart`,
        { cartItems, totalPrice, currency },
        config
      );
      dispatch({ type: CART_DB_SUCCESS });
    } catch (error) {
      dispatch({
        type: CART_DB_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listCart = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_LIST_REQUEST });

    const {
      userLogIn: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/cart`, config);
    dispatch({ type: CART_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CART_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const clearDbCart = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DB_CART_CLEAR_REQUEST });

    const {
      userLogIn: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/cart`, config);
    dispatch({ type: DB_CART_CLEAR_SUCCESS });
  } catch (error) {
    dispatch({
      type: DB_CART_CLEAR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const couponApply = (coupon) => async (dispatch, getState) => {
  try {
    dispatch({ type: APPLY_COUPON_REQUEST });

    const {
      userLogIn: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(`/api/cart/coupon`, { coupon }, config);
    dispatch({ type: APPLY_COUPON_SUCCESS });
  } catch (error) {
    dispatch({
      type: APPLY_COUPON_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const couponCancel = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CANCEL_COUPON_REQUEST });

    const {
      userLogIn: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(`/api/cart/coupon-cancel`, {}, config);
    dispatch({ type: CANCEL_COUPON_SUCCESS });
  } catch (error) {
    dispatch({
      type: CANCEL_COUPON_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userDbCartDelete = () => async (dispatch, getState) => {
  try {
    const {
      userLogIn: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/cart/delete-user-cart`, config);
  } catch (error) {
    alert(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

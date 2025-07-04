import axios from "axios";
import { CLEAR_ERRORS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, MY_ORDERS_FAIL, MY_ORDERS_REQUEST, MY_ORDERS_SUCCESS, ORDERS_INVOICE_FAIL, ORDERS_INVOICE_REQUEST, ORDERS_INVOICE_SUCCESS } from "../constants/orderConstants";
import baseUrl from '../helper';
import { ORDER_CANCEL_FAIL, ORDER_CANCEL_REQUEST, ORDER_CANCEL_SUCCESS } from "../constants/userConstants";

// Create Order
export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });


    const config = {
      headers: {
        "Content-Type": "application/json",
      }, withCredentials: true
    };
    const { data } = await axios.post(`${baseUrl}/api/v1/order/new`, order, config);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// My Orders
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDERS_REQUEST });

    const { data } = await axios.get(`${baseUrl}/api/v1/order/me`, { withCredentials: true });

    dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

export const downloadInvoice = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDERS_INVOICE_REQUEST });

    const response = await axios.get(`${baseUrl}/api/v1/invoice/${id}`, {
      withCredentials: true,
      responseType: "blob", // To handle binary data
    });


    // Handle file download
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `invoice_${id}.pdf`); // Filename
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    dispatch({
      type: ORDERS_INVOICE_SUCCESS,
      payload: { success: true }, // Match reducer expectation
    });
  } catch (error) {
    dispatch({
      type: ORDERS_INVOICE_FAIL,
      payload: error.response?.data?.message || "Failed to download invoice",
    });
  }
};

export const cancelOrder = (id) => async (dispatch) => {
  try {
      dispatch({ type: ORDER_CANCEL_REQUEST });

      const { data } = await axios.put(`${baseUrl}/api/v1/user/cancel/order/${id}`, { withCredentials: true });

      dispatch({
          type: ORDER_CANCEL_SUCCESS,
          payload: data.success,
      });

  } catch (error) {
      dispatch({
          type: ORDER_CANCEL_FAIL,
          payload: error.response?.data?.message,
      })
  }
}


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
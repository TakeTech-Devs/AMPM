import { CLEAR_ERRORS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, MY_ORDERS_FAIL, MY_ORDERS_REQUEST, MY_ORDERS_SUCCESS, ORDERS_INVOICE_FAIL, ORDERS_INVOICE_REQUEST, ORDERS_INVOICE_RESET, ORDERS_INVOICE_SUCCESS } from "../constants/orderConstants";
import { ORDER_CANCEL_FAIL, ORDER_CANCEL_REQUEST, ORDER_CANCEL_RESET, ORDER_CANCEL_SUCCESS } from "../constants/userConstants";

export const newOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload,
            };

        case CREATE_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export const myOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case MY_ORDERS_REQUEST:
            return {
                loading: true,
            };

        case MY_ORDERS_SUCCESS:
            return {
                loading: false,
                orders: action.payload,
            };

        case MY_ORDERS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export const downloadInvoiceReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDERS_INVOICE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ORDERS_INVOICE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDownload: action.payload.success,
            }
        case ORDERS_INVOICE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case ORDERS_INVOICE_RESET:
            return {
                ...state,
                isDownload: false,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const orderCancelReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CANCEL_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ORDER_CANCEL_SUCCESS:
            return {
                ...state,
                loading: false,
                isCancel: action.payload.success,
            }
        case ORDER_CANCEL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case ORDER_CANCEL_RESET:
            return {
                ...state,
                isCancel: false,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}
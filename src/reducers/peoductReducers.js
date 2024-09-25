import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS,
} from '../constants/productConstants';


export const productReducers = (state = { Items: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                Items: []
            }
        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                Items: action.payload.Items,
            }
        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,

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
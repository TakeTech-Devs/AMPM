import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    REMOVE_PRODUCT_DETAILS,
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

// export const productDetailsReducer = (state = { Items: {} }, action) => {
//     switch (action.type) {
//         case PRODUCT_DETAILS_REQUEST:
//             return {
//                 loading: true,
//                 ...state,
//             }
//         case PRODUCT_DETAILS_SUCCESS:
//             return {
//                 loading: false,
//                 Items: action.payload,
//             }
//         case PRODUCT_DETAILS_FAIL:
//             return {
//                 loading: false,
//                 error: action.payload,
//             }
//         case CLEAR_ERRORS:
//             return {
//                 ...state,
//                 error: null,
//             };
//         default:
//             return state;
//     }
// }

const initialState = {
    loading: false,
    Items: {},
    error: null,
};

export const productDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                Items: action.payload,
                error: null,
            };
        case PRODUCT_DETAILS_FAIL:
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
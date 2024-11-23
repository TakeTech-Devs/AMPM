import {
    CONSUMER_LOGIN_REQUEST,
    CONSUMER_LOGIN_SUCCESS,
    CONSUMER_LOGIN_FAIL,
    CLEAR_ERRORS,
    REGISTER_CONSUMER_REQUEST,
    REGISTER_CONSUMER_SUCCESS,
    REGISTER_CONSUMER_FAIL,
    RESELLER_LOGIN_FAIL,
    RESELLER_LOGIN_SUCCESS,
    RESELLER_LOGIN_REQUEST,
    REGISTER_RESELLER_REQUEST,
    REGISTER_RESELLER_SUCCESS,
    REGISTER_RESELLER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOAD_RESELLER_REQUEST,
    LOAD_RESELLER_SUCCESS,
    LOAD_RESELLER_FAIL,
    LOAD_CONSUMER_REQUEST,
    LOAD_CONSUMER_SUCCESS,
    LOAD_CONSUMER_FAIL,
    UPDATE_RESELLER_PROFILE_REQUEST,
    UPDATE_RESELLER_PROFILE_SUCCESS,
    UPDATE_RESELLER_PROFILE_FAIL,
    UPDATE_RESELLER_PROFILE_RESET,
    UPDATE_CONSUMER_PROFILE_REQUEST,
    UPDATE_CONSUMER_PROFILE_SUCCESS,
    UPDATE_CONSUMER_PROFILE_FAIL,
    UPDATE_CONSUMER_PROFILE_RESET,
    SUBMIT_MESSAGE_REQUEST,
    SUBMIT_MESSAGE_SUCCESS,
    SUBMIT_MESSAGE_FAIL,
    UPDATE_CONSUMER_PASSWORD_REQUEST,
    UPDATE_CONSUMER_PASSWORD_SUCCESS,
    UPDATE_CONSUMER_PASSWORD_FAIL,
    UPDATE_CONSUMER_PASSWORD_RESET,
    UPDATE_RESEllER_PASSWORD_REQUEST,
    UPDATE_RESEllER_PASSWORD_SUCCESS,
    UPDATE_RESEllER_PASSWORD_FAIL,
    UPDATE_RESEllER_PASSWORD_RESET,
    SUBSCRIBE_REQUEST,
    SUBSCRIBE_SUCCESS,
    SUBSCRIBE_FAIL,
    APPLY_COUPON_REQUEST,
    APPLY_COUPON_SUCCESS,
    APPLY_COUPON_FAIL,
} from '../constants/userConstants';


export const userReducer = (state = { user: {}, reseller: {}, consumer: {} }, action) => {
    switch (action.type) {
        case CONSUMER_LOGIN_REQUEST:
        case REGISTER_CONSUMER_REQUEST:
        case RESELLER_LOGIN_REQUEST:
        case REGISTER_RESELLER_REQUEST:
        case LOAD_RESELLER_REQUEST:
        case LOAD_CONSUMER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case CONSUMER_LOGIN_SUCCESS:
        case REGISTER_CONSUMER_SUCCESS:
        case RESELLER_LOGIN_SUCCESS:
        case LOAD_RESELLER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
                reseller: action.payload,
            }
        case LOAD_CONSUMER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
                consumer: action.payload,
            }
        case REGISTER_RESELLER_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
            }
        case LOGOUT_SUCCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            };
        case CONSUMER_LOGIN_FAIL:
        case REGISTER_CONSUMER_FAIL:
        case RESELLER_LOGIN_FAIL:
        case REGISTER_RESELLER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                error: action.payload
            }
        case LOAD_RESELLER_FAIL:
            return {
                ...state,
                // loading: false,
                // isAuthenticated: false,
                reseller: null,
                error: null,
            };
        case LOAD_CONSUMER_FAIL:
            return {
                ...state,
                // loading: false,
                // isAuthenticated: false,
                consumer: null,
                error: null,
            };
        case LOGOUT_FAIL:
            return {
                ...state,
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
}

export const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_RESELLER_PROFILE_REQUEST:
        case UPDATE_CONSUMER_PROFILE_REQUEST:
        case UPDATE_CONSUMER_PASSWORD_REQUEST:
        case UPDATE_RESEllER_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_RESELLER_PROFILE_SUCCESS:
        case UPDATE_CONSUMER_PROFILE_SUCCESS:
        case UPDATE_CONSUMER_PASSWORD_SUCCESS:
        case UPDATE_RESEllER_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case UPDATE_RESELLER_PROFILE_FAIL:
        case UPDATE_CONSUMER_PROFILE_FAIL:
        case UPDATE_CONSUMER_PASSWORD_FAIL:
        case UPDATE_RESEllER_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case UPDATE_RESELLER_PROFILE_RESET:
        case UPDATE_CONSUMER_PROFILE_RESET:
        case UPDATE_CONSUMER_PASSWORD_RESET:
        case UPDATE_RESEllER_PASSWORD_RESET:
            return {
                ...state,
                isUpdated: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;

    }
}

export const contactUsFormReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_MESSAGE_REQUEST:
        case SUBSCRIBE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case SUBMIT_MESSAGE_SUCCESS:
        case SUBSCRIBE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            }
        case SUBMIT_MESSAGE_FAIL:
        case SUBSCRIBE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
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


export const couponReducer = (state = { discount: null, totalAfterDiscount: null }, action) => {
    switch (action.type) {
        case APPLY_COUPON_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case APPLY_COUPON_SUCCESS:
            return {
                ...state,
                loading: false,
                discount: action.payload.discount,
                totalAfterDiscount: action.payload.totalAfterDiscount,
                message: action.payload.message,
            };
        case APPLY_COUPON_FAIL:
            return {
                ...state,
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
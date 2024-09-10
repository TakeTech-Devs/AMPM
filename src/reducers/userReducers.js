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
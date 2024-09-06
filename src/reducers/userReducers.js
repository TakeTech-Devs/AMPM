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
} from '../constants/userConstants';


export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case CONSUMER_LOGIN_REQUEST:
        case REGISTER_CONSUMER_REQUEST:
        case RESELLER_LOGIN_REQUEST:
        case REGISTER_RESELLER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case CONSUMER_LOGIN_SUCCESS:
        case REGISTER_CONSUMER_SUCCESS:
        case RESELLER_LOGIN_SUCCESS:
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            }
        case REGISTER_RESELLER_SUCCESS:
            return{
                loading: false,
                isAuthenticated: false,
            }
        case CONSUMER_LOGIN_FAIL:
        case REGISTER_CONSUMER_FAIL:
        case RESELLER_LOGIN_FAIL:
        case REGISTER_RESELLER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                error: action.payload
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
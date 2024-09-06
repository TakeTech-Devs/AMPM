import {
    CONSUMER_LOGIN_REQUEST,
    CONSUMER_LOGIN_SUCCESS,
    CONSUMER_LOGIN_FAIL,
    CLEAR_ERRORS,
    REGISTER_CONSUMER_REQUEST,
    REGISTER_CONSUMER_SUCCESS,
    REGISTER_CONSUMER_FAIL,
    RESELLER_LOGIN_REQUEST,
    RESELLER_LOGIN_SUCCESS,
    RESELLER_LOGIN_FAIL,
    REGISTER_RESELLER_REQUEST,
    REGISTER_RESELLER_SUCCESS,
    REGISTER_RESELLER_FAIL,
} from '../constants/userConstants';
import axios from 'axios';

// Consumer Login

export const consumerLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: CONSUMER_LOGIN_REQUEST })

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`http://localhost:5000/api/v1/consumer/login`, { email, password, withCredentials: true }, config);

        dispatch({
            type: CONSUMER_LOGIN_SUCCESS,
            payload: data.user
        })
    } catch (error) {
        dispatch({ type: CONSUMER_LOGIN_FAIL, payload: error.response.data.message });
    }
}


// Consumar Register

export const consumarRegister = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_CONSUMER_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        // const { data } = await axios.post('http://localhost:5000/api/v1/user/register', userData, { withCredentials: true } , config);
        const { data } = await axios.post('http://localhost:5000/api/v1/consumer/register', userData, config);
        
        dispatch({
            type: REGISTER_CONSUMER_SUCCESS,
            payload: data.user,
        });

    } catch (error) {
        dispatch({          
            type: REGISTER_CONSUMER_FAIL,
            payload: error.response.data.message,
        });
    }
};


// Reseller Login 

export const resellerLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: RESELLER_LOGIN_REQUEST })

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`http://localhost:5000/api/v1/reseller/login`, { email, password, withCredentials: true }, config)

        dispatch({
            type: RESELLER_LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({ type: RESELLER_LOGIN_FAIL, payload: error.response.data.message })

    }
}


// Consumar Register

export const resellerRegister = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_RESELLER_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        // const { data } = await axios.post('http://localhost:5000/api/v1/user/register', userData, { withCredentials: true } , config);
        const { data } = await axios.post('http://localhost:5000/api/v1/reseller/register', userData, config);
        
        dispatch({
            type: REGISTER_RESELLER_SUCCESS,
            payload: data.user,
        });

    } catch (error) {
        dispatch({          
            type: REGISTER_RESELLER_FAIL,
            payload: error.response.data.message,
        });
    }
};


// Clearing Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
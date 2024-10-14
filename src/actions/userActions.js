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
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOAD_RESELLER_REQUEST,
    LOAD_RESELLER_FAIL,
    LOAD_RESELLER_SUCCESS,
    LOAD_CONSUMER_REQUEST,
    LOAD_CONSUMER_SUCCESS,
    LOAD_CONSUMER_FAIL,
    UPDATE_RESELLER_PROFILE_REQUEST,
    UPDATE_RESELLER_PROFILE_SUCCESS,
    UPDATE_RESELLER_PROFILE_FAIL,
    UPDATE_CONSUMER_PROFILE_REQUEST,
    UPDATE_CONSUMER_PROFILE_SUCCESS,
    UPDATE_CONSUMER_PROFILE_FAIL,
    SUBMIT_MESSAGE_REQUEST,
    SUBMIT_MESSAGE_SUCCESS,
    SUBMIT_MESSAGE_FAIL,
} from '../constants/userConstants';
import axios from 'axios';
import baseUrl from '../helper';

// Consumer Login

export const consumerLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: CONSUMER_LOGIN_REQUEST })

        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

        const { data } = await axios.post(`${baseUrl}/api/v1/consumer/login`, { email, password }, config);

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
        const { data } = await axios.post(`${baseUrl}/api/v1/consumer/register`, userData, config);
        
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

export const resellerLogin = (businessEmail, businessPassword) => async (dispatch) => {
    try {
        dispatch({ type: RESELLER_LOGIN_REQUEST })

        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

        const { data } = await axios.post(`${baseUrl}/api/v1/reseller/login`, { businessEmail, businessPassword }, config)

        dispatch({
            type: RESELLER_LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({ type: RESELLER_LOGIN_FAIL, payload: error.response.data.message })

    }
}


// Reseller Register

export const resellerRegister = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_RESELLER_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        // const { data } = await axios.post('http://localhost:5000/api/v1/user/register', userData, { withCredentials: true } , config);
        const { data } = await axios.post(`${baseUrl}/api/v1/reseller/register`, userData, config);
        
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

// Load Reseller 

export const loadReseller = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_RESELLER_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/reseller/profile`, { withCredentials: true });

        dispatch({ type: LOAD_RESELLER_SUCCESS, payload: data.reseller });
    } catch (error) {
        dispatch({ type: LOAD_RESELLER_FAIL, payload: error.response.data.message });
    }
}

// Load Consumer

export const loadConsumer = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_CONSUMER_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/consumer/profile`, { withCredentials: true });

        dispatch({ type: LOAD_CONSUMER_SUCCESS, payload: data.consumer });
    } catch (error) {
        dispatch({ type: LOAD_CONSUMER_FAIL, payload: error.response.data.message });
    }
}

// logout

export const logout = () => async (dispatch) => {
    try {
        await axios.get(`${baseUrl}/api/v1/reseller/logout`, {withCredentials: true});

        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
};

// Update Reseller Profile

export const updateResellerProfile = (userData) => async (dispatch) =>{
    try {
        dispatch({ type: UPDATE_RESELLER_PROFILE_REQUEST })


        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

        const { data } = await axios.put(`${baseUrl}/api/v1/reseller/profile/update`, userData, config)

        dispatch({ type: UPDATE_RESELLER_PROFILE_SUCCESS, payload: data.success });


    } catch (error) {
        dispatch({
      type: UPDATE_RESELLER_PROFILE_FAIL,
      payload: error.response.data.message,
    });
    }
}


// Update Consumer Profile

export const updateConsumerProfile = (userData) => async (dispatch) =>{
    try {
        dispatch({ type: UPDATE_CONSUMER_PROFILE_REQUEST })

        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

        const { data } = await axios.put(`${baseUrl}/api/v1/consumer/profile/update`, userData, config)

        dispatch({ type: UPDATE_CONSUMER_PROFILE_SUCCESS, payload: data.success });


    } catch (error) {
        dispatch({
      type: UPDATE_CONSUMER_PROFILE_FAIL,
      payload: error.response.data.message,
    });
    }
}

// ContactUs Form

export const contactForm = (formData) => async(dispatch) =>{
    try {
        dispatch({ type: SUBMIT_MESSAGE_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.post(`${baseUrl}/api/v1/user/contact`, formData, config);

        dispatch({ type: SUBMIT_MESSAGE_SUCCESS, payload: data.success });

    } catch (error) {
        dispatch({
            type: SUBMIT_MESSAGE_FAIL,
            payload: error.response.data.message,
        })
    }
} 



// Clearing Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
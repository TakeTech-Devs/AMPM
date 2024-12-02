import {
    GET_CONTACT_REQUEST,
    GET_CONTACT_SUCCESS,
    GET_CONTACT_FAIL,
    CLEAR_ERRORS,
} from '../constants/contactConstants';
import axios from 'axios';
import baseUrl from '../helper';

export const getContact = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CONTACT_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/get-contactInfo`);

        dispatch({ type: GET_CONTACT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_CONTACT_FAIL, payload: error.response?.data?.message });   
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
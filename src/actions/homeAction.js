import {
    GET_HOME_REQUEST,
    GET_HOME_SUCCESS,
    GET_HOME_FAIL,
    CLEAR_ERRORS,
} from '../constants/homeConstants';
import axios from 'axios';
import baseUrl from '../helper';

export const getHome = () => async (dispatch) => {
    try {
        dispatch({ type: GET_HOME_REQUEST });

        const { data } = await axios.get(`${baseUrl}/api/v1/get-home`);

        dispatch({ type: GET_HOME_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: GET_HOME_FAIL, payload: error.response?.data?.message });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
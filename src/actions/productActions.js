import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants';
import axios from 'axios';
import { APIID, hash64 } from '../api';

// Get All Products 

export const getProducts = () => async (dispatch) =>{
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST });

        const config = {headers: {
            "api-auth-id": `${APIID}`,
            "api-auth-signature": `${hash64}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        }}
        // console.log("id", APIID);
        // console.log("signature", hash64);
        const { data } = await axios.get(`https://api.unleashedsoftware.com/Products`, config);

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data,
        })
    }
}

export const getProductDetails = (productGuid) => async(dispatch) =>{
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const config = {headers: {
            "api-auth-id": `${APIID}`,
            "api-auth-signature": `${hash64}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        }}

        const { data } = await axios.get(`https://api.unleashedsoftware.com/Products/${productGuid}`, config)
        console.log("DATA",data);
        

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response?.data?.message,
            
        });
        console.log("Error", error.response?.data?.message);
    }
}

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}
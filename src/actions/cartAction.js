import axios from "axios"
import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "../constants/cartConstants";
import { APIID, hash64 } from '../api';


export const addItemsToCart = (productGuid, quantity = 1) => async (dispatch, getState) => {
    const config = {headers: {
        "api-auth-id": `${APIID}`,
        "api-auth-signature": `${hash64}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
    }}

    const { data } = await axios.get(`https://api.unleashedsoftware.com/Products/${productGuid}`, config)

    console.log("API response data:", data);  // <-- Log the response

    // Ensure the product exists before accessing its properties
    if (!data) {
        console.error('Product not found in the API response');
        return;
    }

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.Guid,
            name: data.ProductDescription,
            // seller: data.product.user.name,
            price: data.LastCost,
            // cuttedPrice: data.product.cuttedPrice,
            image: data.ImageUrl,
            // stock: data.product.stock,
            quantity,
        },
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


// save shipping info
export const saveShippingInfo = (data) => async (dispatch) => {

    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data,
    });

    localStorage.setItem('shippingInfo', JSON.stringify(data));
}
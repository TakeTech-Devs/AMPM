import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { contactUsFormReducer, profileReducer, userReducer } from './reducers/userReducers';
import { productDetailsReducer, productReducers } from './reducers/peoductReducers';
import { cartReducer } from './reducers/cartReducers';
import { myOrdersReducer, newOrderReducer } from './reducers/orderReducer';
import { homeReducer } from './reducers/homeReducers';
import { aboutReducer } from './reducers/aboutReducers';
import { contactReducer } from './reducers/contactReducers';


const reducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    contact: contactUsFormReducer,
    Item: productReducers,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    getHome: homeReducer,
    getAbout: aboutReducer,
    getContact: contactReducer,
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    }
}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
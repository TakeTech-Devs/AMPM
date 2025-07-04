import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { contactUsFormReducer, couponReducer, profileReducer, testimonialReducer, userReducer } from './reducers/userReducers';
import { productDataReducer, productDetailsReducer, productReducers } from './reducers/peoductReducers';
import { cartReducer } from './reducers/cartReducers';
import { downloadInvoiceReducer, myOrdersReducer, newOrderReducer, orderCancelReducer } from './reducers/orderReducer';
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
    productData: productDataReducer,
    coupon: couponReducer,
    testimonials: testimonialReducer,
    invoice: downloadInvoiceReducer,
    orderCancel: orderCancelReducer,
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
            shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : [],
    }
}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { contactUsFormReducer, profileReducer, userReducer } from './reducers/userReducers';
import { productDetailsReducer, productReducers } from './reducers/peoductReducers';
import { cartReducer } from './reducers/cartReducers';


const reducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    contact: contactUsFormReducer,
    Item: productReducers,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

let initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
    }
}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
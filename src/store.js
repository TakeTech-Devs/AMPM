import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { contactUsFormReducer, profileReducer, userReducer } from './reducers/userReducers';


const reducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    contact: contactUsFormReducer,
})


const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
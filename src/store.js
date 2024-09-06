import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReducer } from './reducers/userReducers';


const reducer = combineReducers({
    user: userReducer,
})


const middlewarwe = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewarwe)));

export default store;
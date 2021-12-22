import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reactReducer from '../reducers';
const store=createStore(reactReducer,applyMiddleware(thunkMiddleware));
export default store;
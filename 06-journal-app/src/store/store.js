import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';

const reducers = combineReducers({
    auth: authReducer
});
// Recibe solo 1 reducer
export const store = createStore(reducers);
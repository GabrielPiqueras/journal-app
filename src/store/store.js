import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';

const rootReducer = combineReducers({
    auth: authReducer
});

export const store = configureStore({
    reducer: rootReducer,
})
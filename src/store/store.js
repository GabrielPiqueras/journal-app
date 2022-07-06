import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

export const store = configureStore({
    reducer: rootReducer,
});
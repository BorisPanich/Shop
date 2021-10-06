import { configureStore } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

export const rootReducer = combineReducers({

 })
 
 export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
 })
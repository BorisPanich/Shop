import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { cartReducer } from '../u3-components/CartItem/cart-reducer';
import { pizzasReducer } from '../u3-components/PizzaBlock/pizzas-reducer';
import { filtersReducer } from '../u3-components/SortPopup/filters-reducer';

export const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
    cart: cartReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})
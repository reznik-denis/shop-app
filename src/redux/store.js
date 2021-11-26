import { configureStore, createReducer } from "@reduxjs/toolkit";   

import product from '../product.json';
import { changeProducts } from './actions';

const productReducer = createReducer([...product.productList], {
    [changeProducts]: (state, action) => {
        return action.payload ? action.payload : state;
    },
})

export const store = configureStore({
  reducer: { products: productReducer }
});
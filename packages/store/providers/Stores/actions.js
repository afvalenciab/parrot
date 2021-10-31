import { createRoutine } from 'redux-saga-routines';

import { GET_STORES, GET_PRODUCTS, EDIT_PRODUCT } from './constants';

export const getStores = createRoutine(GET_STORES);
export const getProducts = createRoutine(GET_PRODUCTS);
export const editProduct = createRoutine(EDIT_PRODUCT);

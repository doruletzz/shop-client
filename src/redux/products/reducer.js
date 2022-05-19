import { combineReducers } from 'redux';
import {
  FETCH_PRODUCTS,
  RECEIVE_PRODUCTS,
  FETCH_PRODUCT_DETAILS,
  RECEIVE_PRODUCT_DETAILS,
  ERROR_FETCHING_PRODUCTS,
  ERROR_FETCHING_PRODUCT_DETAILS
} from './actions';

const initialProductsState = {
  isFetching: false,
  error: null,
  items: []
};

const initialProductDetialsState = {
  isFetching: false,
  error: null,
  item: {}
};

export const products = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: true,
        error: null
      });
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        items: action.products
      });
    case ERROR_FETCHING_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: null,
        error: action.error
      });

    default:
      return state;
  }
};

export const productDetails = (state = initialProductDetialsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PRODUCT_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        item: action.productDetails
      });
    case ERROR_FETCHING_PRODUCT_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        item: {},
        error: action.error
      });
    default:
      return state;
  }
};

export default combineReducers({
  products: products,
  productDetails: productDetails
});

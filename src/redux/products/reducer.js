import { combineReducers } from 'redux';
import { FETCH_PRODUCTS, RECEIVE_PRODUCTS, FETCH_PRODUCT_DETAILS, RECEIVE_PRODUCT_DETAILS } from "./actions";

const initialProductsState = {
  isFetching: false,
  items: [],
};

const initialProductDetialsState = {
  isFetching: false,
  item: {},
}

export const products = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.products,
      });
    default:
      return state;
  }
};

export const productDetails = (state = initialProductDetialsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_PRODUCT_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.productDetails,
      });
    default:
      return state;
  }
}

export default combineReducers({ 
  products: products,
  productDetails: productDetails,
});
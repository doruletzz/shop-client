import React from 'react';

import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { cart } from '../features/cart/reducer';
import { addProductToCart, removeProductFromCart } from '../features/cart/actions';
import Bag from './Bag';

const mapStateToProps = (state, _) => {
  const {
    cart: { items, quantity }
  } = state.cartReducer;
  const {
    currency: { index }
  } = state.currencyReducer;

  return {
    currencyIndex: index,
    items: items,
    quantity: quantity
  };
};

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(addProductToCart(product)),
  removeProductFromCart: (product) => dispatch(removeProductFromCart(product))
});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const BagContainer = wrapper(Bag);
const BagWrapper = () => {
  return <BagContainer />;
};

export default BagWrapper;

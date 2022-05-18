import React from 'react';

import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { cart } from '../redux/cart/reducer';
import { addProductToCart, removeProductFromCart } from '../redux/cart/actions';
import Cart from './Cart';

const mapStateToProps = (state, ownProps) => {
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
const CartContainer = wrapper(Cart);
const CartWrapper = () => {
  return <CartContainer />;
};

export default CartWrapper;

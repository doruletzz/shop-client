import React from 'react';

import { connect } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../../features/cart/actions';
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

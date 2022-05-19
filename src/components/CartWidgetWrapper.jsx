import React from 'react';

import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { cart } from '../redux/cart/reducer';
import { addProductToCart, removeProductFromCart } from '../redux/cart/actions';
import Cart from './Cart';
import CartWidget from './CartWidget';

const mapStateToProps = (state, ownProps) => {
  const {
    cart: { quantity }
  } = state.cartReducer;

  console.log(quantity);

  return {
    quantity: quantity
  };
};

const mapDispatchToProps = (dispatch) => ({});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const CartWidgetContainer = wrapper(CartWidget);
const CartWidgetWrapper = () => {
  return <CartWidgetContainer />;
};

export default CartWidgetWrapper;

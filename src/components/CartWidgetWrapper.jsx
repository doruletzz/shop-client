import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { cart } from '../redux/cart/reducer';
import { addProductToCart, removeProductFromCart } from '../redux/cart/actions';
import Cart from './Cart';
import CartWidget from './CartWidget';

const mapStateToProps = (state, ownProps) => {
  const { setIsHighlighted } = ownProps;

  const {
    cart: { quantity }
  } = state.cartReducer;

  console.log(quantity);
  console.log(setIsHighlighted, ownProps);

  return {
    quantity: quantity,
    setIsHighlighted: setIsHighlighted
  };
};

const mapDispatchToProps = (dispatch) => ({});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const CartWidgetContainer = wrapper(CartWidget);
const CartWidgetWrapper = ({ setIsHighlighted }) => {
  const navigate = useNavigate();
  return <CartWidgetContainer navigate={navigate} setIsHighlighted={setIsHighlighted} />;
};

export default CartWidgetWrapper;

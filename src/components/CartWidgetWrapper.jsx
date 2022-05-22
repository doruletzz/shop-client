import React from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import CartWidget from './CartWidget';

const mapStateToProps = (state, ownProps) => {
  const { setIsHighlighted } = ownProps;

  const {
    cart: { quantity }
  } = state.cartReducer;

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

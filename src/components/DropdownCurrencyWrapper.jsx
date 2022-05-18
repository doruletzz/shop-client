import React from 'react';

import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { cart } from '../redux/cart/reducer';
import { addProductToCart } from '../redux/cart/actions';
import Cart from './Cart';
import { fetchCurrencies, updateCurrencyIndex } from '../redux/currency/actions';
import DropdownCurrency from './DropdownCurrency';

const mapStateToProps = (state, ownProps) => {
  const {
    currency: { index, currencies }
  } = state.currencyReducer;

  console.log(currencies);

  return {
    index: index,
    currencies: currencies
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  updateCurrencyIndex: (index) => dispatch(updateCurrencyIndex(index))
});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const DropdownCurrencyContainer = wrapper(DropdownCurrency);
const DropdownCurrencyWrapper = () => {
  return <DropdownCurrencyContainer />;
};

export default DropdownCurrencyWrapper;

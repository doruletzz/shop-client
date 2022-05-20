import React from 'react';

import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { cart } from '../features/cart/reducer';
import { addProductToCart } from '../features/cart/actions';
import Cart from '../pages/cart/Cart';
import { fetchCurrencies, updateCurrencyIndex } from '../features/currency/actions';
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

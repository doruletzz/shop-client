import React from 'react';

import { connect } from 'react-redux';
import { fetchCurrencies, updateCurrencyIndex } from '../features/currency/actions';
import DropdownCurrency from './DropdownCurrency';

const mapStateToProps = (state, _) => {
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

import { Query, client } from '@tilework/opus';

import { SERVER_URL } from '../../utils/constants';

export const UPDATE_CURRENCY_INDEX = 'UPDATE_CURRENCY_INDEX';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

export const getCurrencies = async () => {
  const getCurrenciesQuery = new Query('currencies', true).addFieldList(['label', 'symbol']);

  client.setEndpoint(SERVER_URL);

  let result = await client.post(getCurrenciesQuery);
  console.log(result);

  return result.currencies;
};

export const fetchCurrencies = () => {
  return (dispatch) => {
    getCurrencies().then((result) => {
      dispatch({
        type: RECEIVE_CURRENCIES,
        currencies: result
      });
    });
  };
};

export const updateCurrencyIndex = (newIndex) => {
  return {
    type: UPDATE_CURRENCY_INDEX,
    newIndex: newIndex
  };
};

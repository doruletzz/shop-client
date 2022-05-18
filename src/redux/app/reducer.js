import productsReducer from '../products/reducer';
import cartReducer from '../cart/reducer';
import currencyReducer from '../currency/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  productsReducer,
  cartReducer,
  currencyReducer
});

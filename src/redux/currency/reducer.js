import { RECEIVE_CURRENCIES, UPDATE_CURRENCY_INDEX } from "./actions"
import { combineReducers } from 'redux'

const initialCurrencyIndexState = {
    index: 0,
    currencies: [],
}

export const currencyIndex = (state = initialCurrencyIndexState, action) => {
    switch(action.type){
        case UPDATE_CURRENCY_INDEX:
            return Object.assign({}, state, {
                index: action.newIndex,
            });
        case RECEIVE_CURRENCIES:
            return Object.assign({}, state, {
                currencies: action.currencies,
            });
        default:
            return state;
    }
}

export default combineReducers({
    currency: currencyIndex,
});




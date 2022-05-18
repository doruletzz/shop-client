import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './actions';
import { combineReducers } from 'redux';

const initialCartState = {
  quantity: 0,
  items: []
};

const isEqualAttribute = (attr1, attr2) => {
  // console.log(attr1, attr2, JSON.stringify(attr1) === JSON.stringify(attr2))
  return JSON.stringify(attr1) === JSON.stringify(attr2);
};

const addProductsToCart = (cart, product, amount) => {
  for (let i in cart.items) {
    // console.log(JSON.stringify(cart[i]), product)
    if (isEqualAttribute(cart.items[i].attributes, product.attributes)) {
      cart.items[i].amount += amount;
      cart.quantity += amount;

      return cart.items;
    }
  }

  cart.quantity += amount;

  return cart.items.concat(product);
};

const removeProductsFromCart = (cart, product, amount) => {
  for (let i in cart.items) {
    // console.log(JSON.stringify(cart[i]), product)
    if (isEqualAttribute(cart.items[i].attributes, product.attributes)) {
      if (cart.items[i].amount > amount) {
        cart.items[i].amount -= amount;
        cart.quantity -= amount;
        return cart.items;
      }

      cart.quantity -= cart.items[i].amount;
      cart.items.splice(i, 1);

      return cart.items;
    }
  }

  return cart.items;
};

export const cart = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      // console.log(state.items, action.product)
      return Object.assign({}, state, {
        items: addProductsToCart(state, action.product, action.product.amount),
        quantity: state.quantity
      });

    case REMOVE_PRODUCT_FROM_CART:
      return Object.assign({}, state, {
        items: removeProductsFromCart(state, action.product, action.product.amount),
        quantity: state.quantity
      });

    default:
      return state;
  }
};

export default combineReducers({
  cart: cart
});

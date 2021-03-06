export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

export const addProductToCart = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    product: product
  };
};

export const removeProductFromCart = (product) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    product: product
  };
};

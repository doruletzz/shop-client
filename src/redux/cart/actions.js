
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

const addProductToCart = async (product) => {

}

const removeProductFromCart = async (product) => {
    return dispatch({
        type: ADD_PRODUCT_TO_CART,
        product: product
    })


}
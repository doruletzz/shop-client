
const initialCartState = {
    items: {},
}

export const cart = (state = initialCartState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    cart: cart,
});
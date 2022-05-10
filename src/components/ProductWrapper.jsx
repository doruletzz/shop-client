import React from 'react'
import Product from './Product';

import { useParams } from 'react-router'
import { fetchProductDetails, fetchProducts } from '../redux/products/actions';
import { connect } from 'react-redux';
import { productDetails } from '../redux/products/reducer';
import { cart } from '../redux/cart/reducer';
import { addProductToCart } from '../redux/cart/actions';


const mapStateToProps = (state, ownProps) => {

    const { id } = ownProps;
    const { productDetails: { isFetching, item } } = state.productsReducer;
    const { cart : {items}} = state.cartReducer;
    const { currency : {index} } = state.currencyReducer;


    return {
        currencyIndex: index,
        isLoading: isFetching,
        product: item,
        productId: id,
        cart: items,
    };

};

const mapDispatchToProps = dispatch => ({
    fetchProductDetails: (id) => dispatch(fetchProductDetails(id)),
    addProductToCart: (product) => dispatch(addProductToCart(product)),
});


const wrapper = connect(mapStateToProps, mapDispatchToProps);
const ProductContainer = wrapper(Product);
const ProductWrapper = () => {
    const { productId } = useParams();
    return (<ProductContainer id={productId} />);
};

export default ProductWrapper;
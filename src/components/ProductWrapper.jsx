import React from 'react'
import Product from './Product';

import {useParams} from 'react-router'
import { fetchProductDetails, fetchProducts } from '../redux/products/actions';
import { connect } from 'react-redux';
import { productDetails } from '../redux/products/reducer';


const mapStateToProps = (state , ownProps) => {

    const { id } = ownProps;
    const { productDetails: { isFetching, item } } = state;

    return {
      isLoading: isFetching,
      product: item,
      productId: id,
    };

};

const mapDispatchToProps = dispatch => ({
    fetchProductDetails: (id) => dispatch(fetchProductDetails(id)),
});


const wrapper = connect(mapStateToProps, mapDispatchToProps);
const ProductContainer = wrapper(Product);
const ProductWrapper = () => {
    const { productId } = useParams();
    return (<ProductContainer id={productId} />);
};

export default ProductWrapper;
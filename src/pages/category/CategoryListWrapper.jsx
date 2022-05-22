import React from 'react';
import CategoryList from './CategoryList';

import { useParams } from 'react-router';
import { fetchProductDetails, fetchProducts } from '../../features/products/actions';
import { connect } from 'react-redux';
import { addProductToCart } from '../../features/cart/actions';

const mapStateToProps = (state, ownProps) => {
  const { category } = ownProps;
  console.log(state);
  const {
    products: { isFetching, items, error },
    productDetails: productDetail
  } = state.productsReducer;
  const {
    currency: { index }
  } = state.currencyReducer;

  return {
    currencyIndex: index,
    isLoadingProducts: isFetching,
    isLoadingProductDetails: productDetail.isFetching,
    error,
    errorProductDetail: productDetail.error,
    productDetail: productDetail.item,
    products: items,
    category: category
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (category) => dispatch(fetchProducts(category)),
  fetchProductDetails: (id) => dispatch(fetchProductDetails(id)),
  addProductToCart: (product) => dispatch(addProductToCart(product))
});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const CategoryListContainer = wrapper(CategoryList);
const CategoryListWrapper = () => {
  const { category } = useParams();
  return <CategoryListContainer category={category} />;
};

export default CategoryListWrapper;

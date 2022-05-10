import React from 'react'
import CategoryList from './CategoryList';

import { useParams } from 'react-router'
import { fetchProducts } from '../redux/products/actions';
import { connect } from 'react-redux';
import { products } from '../redux/products/reducer';


const mapStateToProps = (state, ownProps) => {

    const { category } = ownProps;
    console.log(state);
    const { products: { isFetching, items } } = state.productsReducer;
    const { currency: { index } } = state.currencyReducer;

    return {
        currencyIndex : index,
        isLoading: isFetching,
        products: items,
        category: category,
    };

};

const mapDispatchToProps = dispatch => ({
    fetchProducts: (category) => dispatch(fetchProducts(category)),
});


const wrapper = connect(mapStateToProps, mapDispatchToProps);
const CategoryListContainer = wrapper(CategoryList);
const CategoryListWrapper = () => {
    const { category } = useParams();
    return (<CategoryListContainer category={category} />);
};

export default CategoryListWrapper
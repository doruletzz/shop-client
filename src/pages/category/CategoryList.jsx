import React, { PureComponent } from 'react';
import ProductCard from '../../components/ProductCard';
import { Link } from 'react-router-dom';

import styles from './CategoryList.module.scss';

export default class CategoryList extends PureComponent {
  componentDidMount() {
    this.props.fetchProducts(this.props.category);
  }

  componentDidUpdate(prevProps) {
    console.log('updated');

    if (this.props.category !== prevProps.category) {
      this.props.fetchProducts(this.props.category);
    }

    if (this.props.productDetail !== prevProps.productDetail) {
      this.buyDefaultProduct(this.props.productDetail);
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.category !== prevProps.category) {
  //     this.props.fetchProducts(this.props.category);
  //   }
  // }

  buyDefaultProduct(prodDetail) {
    let attributes = {};

    prodDetail.attributes.forEach(
      (attribute) => (attributes[attribute.id] = attribute.items[0].id)
    );

    const product = {
      id: this.props.productDetail.id,
      name: this.props.productDetail.name,
      brand: this.props.productDetail.brand,
      prices: this.props.productDetail.prices,
      allAttributes: this.props.productDetail.attributes,
      attributes: attributes,
      gallery: this.props.productDetail.gallery,
      amount: 1
    };

    this.props.addProductToCart(product);
  }

  fetchProductDetails(productId) {
    this.props.fetchProductDetails(productId);
  }

  render() {
    if (this.props.isLoading) return <p>i'm loading</p>;

    if (this.props.error) return <p>{this.props.error.message}</p>;

    return (
      <>
        <h1 className={styles.heading}>{this.props.category.toUpperCase()}</h1>
        <div className={styles.container}>
          {this.props.products.map((product, idx) => (
            <div key={idx} className={styles.item}>
              {product.inStock && (
                <button
                  className={styles.cart_button}
                  onClick={() => this.fetchProductDetails(product.id)}>
                  {this.props.isLoadinProductDetails ? (
                    '...'
                  ) : (
                    <img alt="cart" src="/CartWhite.svg" />
                  )}
                </button>
              )}
              <Link to={product.id}>
                <ProductCard
                  imgUrl={product.gallery[0]}
                  name={product.name}
                  inStock={product.inStock}
                  symbol={product.prices[this.props.currencyIndex].currency.symbol}
                  amount={product.prices[this.props.currencyIndex].amount}
                />
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}

import React, { PureComponent } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

import styles from './CategoryList.module.scss';

export default class CategoryList extends PureComponent {
  componentDidMount() {
    this.props.fetchProducts(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.props.fetchProducts(this.props.category);
    }
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
              <Link to={product.id}>
                <ProductCard
                  imgUrl={product.gallery[0]}
                  name={product.name}
                  inStock={product.inStock}
                  symbol={product.prices[this.props.currencyIndex].currency.symbol}
                  amount={product.prices[this.props.currencyIndex].amount}
                />
              </Link>
              {/* <img src={product.gallery[0]} width="200px" />
                            <h1>{product.name}</h1>
                            <h6>{!product.inStock && "not in stock :("}</h6>
                        <p>{product.prices[0].currency.symbol}{product.prices[0].amount}</p> */}
            </div>
          ))}
        </div>
      </>
    );
  }
}

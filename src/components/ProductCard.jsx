import React, { PureComponent } from 'react';

import styles from './ProductCard.module.scss';

export default class ProductCard extends PureComponent {
  render() {
    return (
      <div className={this.props.inStock ? styles.card : `${styles.card} ${styles.not_in_stock}`}>
        {!this.props.inStock && <p className={styles.not_in_stock_text}>OUT OF STOCK</p>}
        <img className={styles.img} src={this.props.imgUrl} width="200px" alt={this.props.name} />
        <h1 className={styles.title}>{this.props.name}</h1>
        <p className={styles.price}>
          {this.props.symbol}
          {this.props.amount}
        </p>
      </div>
    );
  }
}

import React, { PureComponent } from 'react';

import styles from './ProductCard.module.scss';

export default class ProductCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  render() {
    return (
      <div className={styles.card}>
        <img className={styles.img} src={this.props.imgUrl} width="200px" alt={this.props.name} />
        <h1 className={styles.title}>{this.props.name}</h1>
        {/* <h6>{!this.props.inStock && "not in stock :("}</h6> */}
        <p className={styles.price}>
          {this.props.symbol}
          {this.props.amount}
        </p>
      </div>
    );
  }
}

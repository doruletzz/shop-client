import React, { PureComponent } from 'react';

import Bag from '../../components/Bag';
import { TAX_AMOUNT } from '../../utils/constants';

import styles from './Cart.module.scss';

export class Cart extends PureComponent {
  // Calculates total sum of prices in the cart
  calculateTotal() {
    const sum = this.props.items
      .map((item) => item.prices[this.props.currencyIndex].amount * item.amount)
      .reduce((total, el) => (total += el), 0);

    return sum;
  }

  render() {
    return (
      <div>
        <h1 className={styles.heading}>CART</h1>
        <hr />
        <Bag {...this.props} />
        {this.props.items[0] && (
          <div>
            {/* <hr /> */}
            <h2 className={styles.tax}>
              Tax 21% :
              <b>
                {' '}
                {this.props.items[0].prices[this.props.currencyIndex].currency.symbol}
                {(this.calculateTotal() * TAX_AMOUNT).toFixed(2)}
              </b>
            </h2>
            <h2 className={styles.quantity}>
              Quantity : <b>{this.props.quantity}</b>
            </h2>
            <h2 className={styles.total}>
              Total :
              <b>
                {' '}
                {this.props.items[0].prices[this.props.currencyIndex].currency.symbol}
                {(this.calculateTotal() + this.calculateTotal() * TAX_AMOUNT).toFixed(2)}
              </b>
            </h2>
            <button
              onClick={() => {
                alert('items checked out (method not implemented)');
              }}
              className={styles.order_button}>
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;

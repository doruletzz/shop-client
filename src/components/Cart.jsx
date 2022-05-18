import React, { PureComponent } from 'react';

import Bag from './Bag';

import styles from './Cart.module.scss';

const TAX_AMOUNT = 21 / 100;

export class Cart extends PureComponent {
  componentDidMount() {
    console.log(this.props.items);
  }

  calculateTotal() {
    const sum = this.props.items
      .map((item) => item.prices[this.props.currencyIndex].amount * item.amount)
      .reduce((total, el) => (total += el), 0);
    console.log(sum);
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
            <h2>
              Tax 21% : {this.props.items[0].prices[this.props.currencyIndex].currency.symbol}
              {(this.calculateTotal() * TAX_AMOUNT).toFixed(2)}
            </h2>
            <h2>Quantity : {this.props.quantity}</h2>
            <h2>
              Total : {this.props.items[0].prices[this.props.currencyIndex].currency.symbol}
              {(this.calculateTotal() + this.calculateTotal() * TAX_AMOUNT).toFixed(2)}
            </h2>
            <button className={styles.order_button}>ORDER</button>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import BagWrapper from './BagWrapper';

import styles from './CartWidget.module.scss';

export class CartWidget extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.showCart = this.showCart.bind(this);
    this.hideCart = this.hideCart.bind(this);
  }

  showCart(e) {
    this.setState(() => {
      return { show: true };
    });
  }

  hideCart(e) {
    this.setState(() => {
      return { show: false };
    });
  }

  render() {
    return (
      <div className={styles.container} onMouseEnter={this.showCart} onMouseLeave={this.hideCart}>
        <Link className={styles.cart} to="/cart">
          {this.props.quantity > 0 && !this.state.show && (
            <div className={styles.quantity}>{this.props.quantity}</div>
          )}
          🛒
        </Link>

        {this.state.show && (
          <div className={styles.bag_dropdown}>
            <div className={styles.item}>
              <BagWrapper />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CartWidget;

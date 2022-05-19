import React, { PureComponent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import BagWrapper from './BagWrapper';

import styles from './CartWidget.module.scss';

export class CartWidget extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props.setIsHighlighted);
    this.state = {
      show: false
    };

    this.showCart = this.showCart.bind(this);
    this.hideCart = this.hideCart.bind(this);
  }

  showCart(e) {
    this.setState(() => {
      if (this.props.quantity > 0) this.props.setIsHighlighted(true);
      return { show: this.props.quantity > 0 };
    });
  }

  hideCart(e) {
    this.setState(() => {
      this.props.setIsHighlighted(false);
      return { show: false };
    });
  }

  render() {
    return (
      <>
        {/* <div className={styles.highlight_overlay}></div> */}
        <div className={styles.container} onMouseEnter={this.showCart} onMouseLeave={this.hideCart}>
          <Link className={styles.cart} to="/cart">
            {this.props.quantity > 0 && !this.state.show && (
              <div className={styles.quantity}>{this.props.quantity}</div>
            )}
            <img className={styles.icon} src="/Cart.svg" />
            {/* 🛒 */}
          </Link>

          {this.state.show && (
            <div className={styles.bag_dropdown}>
              <div className={styles.dropdown_container}>
                <h1 className={styles.heading}>{`My Bag, ${this.props.quantity} Items`}</h1>
                <div className={styles.bag}>
                  <BagWrapper />
                </div>

                <div className={styles.buttons}>
                  <button
                    onClick={() => {
                      this.props.navigate('/cart');
                    }}
                    className={styles.button_secondary}>
                    VIEW CART
                  </button>
                  <button
                    onClick={() => {
                      alert('items checked out (method not implemented)');
                    }}
                    className={styles.button_primary}>
                    CHECK OUT
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default CartWidget;

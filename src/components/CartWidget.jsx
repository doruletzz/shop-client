import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import BagWrapper from './BagWrapper';

import styles from './CartWidget.module.scss';

export class CartWidget extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    };

    this.showBag = this.showBag.bind(this);
    this.hideBag = this.hideBag.bind(this);
  }

  // changes cart
  showBag(e) {
    this.setState(() => {
      if (this.props.quantity > 0) this.props.setIsHighlighted(true);
      return { isHovered: this.props.quantity > 0 };
    });
  }

  hideBag(e) {
    this.setState(() => {
      this.props.setIsHighlighted(false);
      return { isHovered: false };
    });
  }

  render() {
    return (
      <>
        <div className={styles.container} onMouseEnter={this.showBag} onMouseLeave={this.hideBag}>
          <Link className={styles.cart} to="/cart">
            {this.props.quantity > 0 && !this.state.isHovered && (
              <div className={styles.quantity}>{this.props.quantity}</div>
            )}
            <img alt="cart" className={styles.icon} src="/Cart.svg" />
          </Link>

          {this.state.isHovered && (
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

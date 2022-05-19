import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import CartWidgetWrapper from './CartWidgetWrapper';
import DropdownCurrency from './DropdownCurrency';
import DropdownCurrencyWrapper from './DropdownCurrencyWrapper';

import styles from './Navbar.module.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHighlighted: false
    };

    this.setIsHighlighted = this.setIsHighlighted.bind(this);
  }

  setIsHighlighted(isHighlighted) {
    this.setState({
      isHighlighted: isHighlighted
    });
  }

  render() {
    return (
      <>
        {this.state.isHighlighted && <div className={styles.highlight_overlay} />}
        <div className={styles.wrapper}>
          <nav className={styles.navbar}>
            <ul className={styles.links}>
              <Link to="/all">
                <li className={styles.link}>ALL</li>
              </Link>
              <Link to="/tech">
                <li className={styles.link}>TECH</li>
              </Link>
              <Link to="/clothes">
                <li className={styles.link}>CLOTHES</li>
              </Link>
            </ul>
            <div className={styles.brand}>
              <img src="/Logo.svg" />
            </div>
            <div className={styles.rhs}>
              <DropdownCurrencyWrapper />
              <CartWidgetWrapper setIsHighlighted={this.setIsHighlighted} />

              {/* <Link to="/cart"> 🛒 */}
              {/* </Link> */}
            </div>
          </nav>
        </div>
      </>
    );
  }
}

import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart';
import CartWrapper from './CartWrapper';

import styles from './CartWidget.module.scss';


export class CartWidget extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }

        this.showCart = this.showCart.bind(this);
        this.hideCart = this.hideCart.bind(this);
    }

    showCart(e) {
        this.setState(state => {
            return { show: true };
        })
    }

    hideCart(e) {
        this.setState(state => {
            return { show: false };
        })
    }

    render() {
        return (
            <div
                className={styles.container}
                onMouseEnter={this.showCart}
                onMouseLeave={this.hideCart}>
                <Link
                    className={styles.cart}
                    to="/cart" >🛒</Link>

                {this.state.show &&
                    <div className={styles.bag_dropdown}>
                        <CartWrapper />
                    </div>
                }
            </div>
        )
    }
}

export default CartWidget
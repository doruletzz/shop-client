import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';

import styles from './Cart.module.scss'

const TAX_AMOUNT = 21 / 100;

export class Cart extends PureComponent {
    componentDidMount() {
        console.log(this.props.currencyIndex);
    }

    calculateTotal() {
        const sum = this.props.items
            .map(item => item.prices[this.props.currencyIndex].amount * item.amount)
            .reduce((total, el) => total += el, 0);
        console.log(sum);
        return sum;
    }

    render() {
        return (
            <div>
                {this.props.items.map(item => (
                    <div key={item.id} >
                        <div className={styles.container}>
                            <div className={styles.product}>
                                <Link to={item.id}>
                                    <h1>{item.name}</h1 >
                                </Link>
                                <h2>{item.brand}</h2>
                                <h2>{item.prices[this.props.currencyIndex].currency.symbol}{item.prices[this.props.currencyIndex].amount}</h2>
                                {Object.entries(item.attributes).map(attribute => (
                                    <div>{attribute.join(" : ")}</div>
                                ))}
                            </div>


                            <div className={styles.amount}>
                                <button>+</button>
                                <h3>{item.amount}</h3>
                                <button>-</button>
                            </div>

                            {/* //TODO: Gallery Component */}
                            <div className={styles.gallery}>
                                <img className={styles.image} src={item.gallery[0]} width="160px" />
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
                {this.props.items[0] && <div>
                    <h2>Tax 21% : {this.props.items[0].prices[this.props.currencyIndex].currency.symbol}{(this.calculateTotal() * TAX_AMOUNT).toFixed(2)}</h2>
                    <h2>Quantity : {this.props.quantity}</h2>
                    <h2>Total : {this.props.items[0].prices[this.props.currencyIndex].currency.symbol}{(this.calculateTotal() + this.calculateTotal() * TAX_AMOUNT).toFixed(2)}</h2>
                </div>
                }
            </div>
        )
    }

}

export default Cart;
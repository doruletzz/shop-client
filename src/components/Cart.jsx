import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';

import styles from './Cart.module.scss'

const TAX_AMOUNT = 21 / 100;

export class Cart extends PureComponent {
    componentDidMount() {
        console.log(this.props.items);
    }

    calculateTotal() {
        const sum = this.props.items
            .map(item => item.prices[this.props.currencyIndex].amount * item.amount)
            .reduce((total, el) => total += el, 0);
        console.log(sum);
        return sum;
    }

    addToCart(product) {
        const oneProduct = { ...product }
        oneProduct.amount = 1;

        console.log(oneProduct);
        this.props.addProductToCart(oneProduct);
    }


    removeFromCart(product) {
        const oneProduct = { ...product }
        oneProduct.amount = 1;

        console.log(oneProduct);
        this.props.removeProductFromCart(oneProduct);
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
                                {/* {Object.entries(item.attributes).map(attribute => (
                                    <div>{attribute.join(" : ")}</div>
                                ))} */}
                                {item.allAttributes.map(attribute => (
                                    <div key={attribute.id} className={styles.attribute_container}>
                                        <h1 >{attribute.name.toUpperCase()}: </h1>
                                        {attribute.type === "swatch" ?
                                            attribute.items.map((attribItem, idx) => (
                                                <div className={styles.swatch}>
                                                    <button
                                                        className={item.attributes[attribute.id] === attribItem.id ? styles.selected : styles.default}
                                                        key={attribItem.id}
                                                        style={{ backgroundColor: attribItem.value }}
                                                    >
                                                    </button>
                                                </div>
                                            ))
                                            :
                                            attribute.items.map(attribItem => (
                                                <div className={styles.attribute}>
                                                    <button
                                                        key={attribItem.id}
                                                        className={item.attributes[attribute.id] === attribItem.id ? styles.default : styles.selected}
                                                    >
                                                        {attribItem.displayValue}
                                                    </button>
                                                </div>

                                                // <button key={item.id} 
                                                //     className={this.state.attributes[attribute.id] === item.id ? styles.selected : styles.default}
                                                //     onClick={() => this.setAttribute(attribute.id, item.id)}>
                                                //             {item.displayValue}
                                                // </button>
                                            ))
                                        }
                                    </div>
                                ))}
                            </div>


                            <div className={styles.amount}>
                                <button onClick={() => this.addToCart(item)}>+</button>
                                <h3>{item.amount}</h3>
                                <button onClick={() => this.removeFromCart(item)}>-</button>
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
                    <button>ORDER</button>
                </div>
                }
            </div>
        )
    }

}

export default Cart;
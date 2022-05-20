import React, { PureComponent } from 'react';
import { Link, Navigate } from 'react-router-dom';

import styles from './Bag.module.scss';
import MiniGallery from './MiniGallery';

export class Bag extends PureComponent {
  // adds one product to cart
  addToCart(product) {
    const oneProduct = { ...product };
    oneProduct.amount = 1;

    this.props.addProductToCart(oneProduct);
  }

  // removes one product from cart
  removeFromCart(product) {
    const oneProduct = { ...product };
    oneProduct.amount = 1;

    this.props.removeProductFromCart(oneProduct);
  }

  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          <div key={item.id}>
            <div className={styles.container}>
              <div className={styles.product}>
                <Link to={`all/${item.id}`}>
                  <h1 className={styles.title}>{item.name}</h1>
                </Link>
                <h2 className={styles.subtitle}>{item.brand}</h2>
                <h2 className={styles.price}>
                  {item.prices[this.props.currencyIndex].currency.symbol}
                  {item.prices[this.props.currencyIndex].amount}
                </h2>
                {item.allAttributes.map((attribute) => (
                  <div key={attribute.id} className={styles.attribute_container}>
                    <h4 className={styles.attribute_name}>{attribute.name.toUpperCase()}: </h4>
                    {attribute.type === 'swatch'
                      ? attribute.items.map((attribItem, idx) => (
                          <div className={styles.swatch}>
                            <button
                              className={
                                item.attributes[attribute.id] === attribItem.id
                                  ? styles.selected
                                  : styles.default
                              }
                              key={attribItem.id}
                              style={{ backgroundColor: attribItem.value }}></button>
                          </div>
                        ))
                      : attribute.items.map((attribItem) => (
                          <div className={styles.attribute}>
                            <button
                              key={attribItem.id}
                              className={
                                item.attributes[attribute.id] === attribItem.id
                                  ? styles.selected
                                  : styles.default
                              }>
                              {attribItem.displayValue}
                            </button>
                          </div>
                        ))}
                  </div>
                ))}
              </div>

              <div className={styles.rhs}>
                <div className={styles.amount}>
                  <button className={styles.amount_button} onClick={() => this.addToCart(item)}>
                    +
                  </button>
                  <h3>{item.amount}</h3>
                  <button
                    className={styles.amount_button}
                    onClick={() => this.removeFromCart(item)}>
                    -
                  </button>
                </div>

                <div className={styles.gallery}>
                  <MiniGallery gallery={item.gallery} />
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Bag;

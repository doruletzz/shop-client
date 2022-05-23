import React, { PureComponent } from 'react';
import Gallery from '../../components/Gallery';

import styles from './Product.module.scss';

export class Product extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      attributes: {}
    };

    this.setAttribute = this.setAttribute.bind(this);
  }

  componentDidMount() {
    this.props.fetchProductDetails(this.props.id);
  }

  setAttribute(attributeId, itemId) {
    this.setState((prevState) => {
      let attributes = { ...prevState.attributes };
      attributes[attributeId] = itemId;
      return { attributes };
    });

    console.log(this.state.attributes[attributeId]);
  }

  addToCart() {
    // console.log({product: this.props.product, attributes: this.state.attributes});

    if (Object.keys(this.state.attributes).length !== this.props.product.attributes.length) {
      alert('you have not selected all attributes');
      return;
    }

    // deep copy of the object
    const attributes = JSON.parse(JSON.stringify(this.state.attributes));

    const product = {
      id: this.props.product.id,
      name: this.props.product.name,
      brand: this.props.product.brand,
      prices: this.props.product.prices,
      allAttributes: this.props.product.attributes,
      attributes: attributes,
      gallery: this.props.product.gallery,
      amount: 1
    };

    console.log(product);
    this.props.addProductToCart(product);
  }

  render() {
    if (this.props.isLoading) return <p>i'm loading</p>;

    if (this.props.error) return <p>{this.props.error.message}</p>;

    return (
      <div className={styles.container}>
        <div className={styles.left}>
          {/* {this.props.product.gallery && this.props.product.gallery.map(imgSrc => <img src={imgSrc} alt={imgSrc} width="200" />)} */}
          {this.props.product.gallery && <Gallery gallery={this.props.product.gallery} />}
        </div>

        <div className={styles.right}>
          <h1 className={styles.title}>{this.props.product.name}</h1>
          <h6 className={styles.subtitle}>{this.props.product.brand}</h6>
          {this.props.product.attributes &&
            this.props.product.attributes.map((attribute) => (
              <div key={attribute.id} className={styles.attribute_container}>
                <h1>{attribute.name.toUpperCase()}: </h1>
                {attribute.type === 'swatch'
                  ? attribute.items.map((item, idx) => (
                      <div className={styles.swatch}>
                        <button
                          className={
                            this.state.attributes[attribute.id] === item.id
                              ? styles.selected
                              : styles.default
                          }
                          key={item.id}
                          style={{ backgroundColor: item.value }}
                          onClick={() => this.setAttribute(attribute.id, item.id)}></button>
                      </div>
                    ))
                  : attribute.items.map(
                      (item) =>
                        this.state.attributes[attribute.id] !== null && (
                          <Button
                            key={item.id}
                            setAttribute={() => this.setAttribute(attribute.id, item.id)}
                            displayValue={item.displayValue}
                            isSelected={this.state.attributes[attribute.id] === item.id}
                          />
                        )
                    )}
              </div>
            ))}
          <p className={styles.price}>PRICE:</p>
          <p className={styles.price_value}>
            {this.props.product.prices &&
              this.props.product.prices[this.props.currencyIndex].currency.symbol}
            {this.props.product.prices &&
              this.props.product.prices[this.props.currencyIndex].amount}
          </p>
          {this.props.product.inStock ? (
            <button onClick={() => this.addToCart()} className={styles.button}>
              ADD TO CART
            </button>
          ) : (
            <button className={styles.button}>OUT OF STOCK :(</button>
          )}
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: this.props.product.description }}
          />
        </div>
      </div>
    );
  }
}

export class Button extends PureComponent {
  render() {
    return (
      <div className={styles.attribute}>
        <button
          onClick={this.props.setAttribute}
          className={this.props.isSelected ? styles.selected : styles.default}>
          {this.props.displayValue}
        </button>
      </div>
    );
  }
}

export default Product;

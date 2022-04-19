import React, { PureComponent } from 'react'

import styles from './Product.module.scss';


export class Product extends PureComponent {

    componentDidMount() {
        this.props.fetchProductDetails(this.props.id);
    }

    render() {
        return (
            <div>
                <h1 className={styles.title}>{this.props.product.name}</h1>
                <h6 className={styles.subtitle}>{this.props.product.brand}</h6>
                {this.props.product.attributes && this.props.product.attributes.map(attribute => (
                    <>
                        <h1>{attribute.name}: </h1>
                        {attribute.type === "swatch" ?
                            attribute.items.map(item => (
                                <button key={item.id} style={{ backgroundColor: item.value, color: "indigo" }}>{item.displayValue}</button>
                            ))
                            :
                            attribute.items.map(item => (
                                <button key={item.id}>{item.displayValue}</button>
                            ))
                        }
                    </>
                )
                )}
                <p>PRICE: {this.props.product.prices && this.props.product.prices[0].currency.symbol}{this.props.product.prices && this.props.product.prices[0].amount}</p>
                <button>add to cart</button>
                <div dangerouslySetInnerHTML={{ __html: this.props.product.description }} />
                {this.props.product.gallery && this.props.product.gallery.map(imgSrc => <img src={imgSrc} alt={imgSrc} width="200" />)}
            </div>
        )
    }
}

export default Product
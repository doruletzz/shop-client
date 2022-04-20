import React, { PureComponent } from 'react'
import Gallery from './Gallery';

import styles from './Product.module.scss';


export class Product extends PureComponent {

    componentDidMount() {
        this.props.fetchProductDetails(this.props.id);
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.left}>
                    {/* {this.props.product.gallery && this.props.product.gallery.map(imgSrc => <img src={imgSrc} alt={imgSrc} width="200" />)} */}
                    {this.props.product.gallery && <Gallery gallery={this.props.product.gallery} />}
                    
                </div>

                <div className={styles.right}>

                    <h1 className={styles.title}>{this.props.product.name}</h1>
                    <h6 className={styles.subtitle}>{this.props.product.brand}</h6>
                    {this.props.product.attributes && this.props.product.attributes.map(attribute => (
                        <div className={styles.attribute}>
                            <h1>{attribute.name.toUpperCase()}: </h1>
                            {attribute.type === "swatch" ?
                                attribute.items.map(item => (
                                    <button key={item.id} style={{ backgroundColor: item.value, color: "indigo" }}>{item.displayValue}</button>
                                ))
                                :
                                attribute.items.map(item => (
                                    <button key={item.id}>{item.displayValue}</button>
                                ))
                            }
                        </div>
                    )
                    )}
                    <p className={styles.price}>PRICE:
                    </p>
                    <p className={styles.price_value}>
                        {this.props.product.prices && this.props.product.prices[0].currency.symbol}{this.props.product.prices && this.props.product.prices[0].amount}
                    </p>
                    <button className={styles.button}>ADD TO CART</button>
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: this.props.product.description }} />
                </div>
            </div>
        )
    }
}

export default Product
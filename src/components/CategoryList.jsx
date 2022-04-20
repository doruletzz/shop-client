import React, { PureComponent } from 'react'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

import styles from './CategoryList.module.scss';


export default class CategoryList extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts(this.props.category);

        console.log(this.props.products)

    }

    render() {

        return (
            <>
                <h1 className={styles.heading}>{this.props.category}</h1>
                <div className={styles.container}>
                    {this.props.products.map((product, idx) => (
                        <div key={idx} className={styles.item} >
                            <Link to={product.id} >
                                <ProductCard
                                    imgUrl={product.gallery[0]}
                                    name={product.name}
                                    inStock={product.inStock}
                                    symbol={product.prices[0].currency.symbol}
                                    amount={product.prices[0].amount}
                                />
                            </Link>
                            {/* <img src={product.gallery[0]} width="200px" />
                            <h1>{product.name}</h1>
                            <h6>{!product.inStock && "not in stock :("}</h6>
                        <p>{product.prices[0].currency.symbol}{product.prices[0].amount}</p> */}
                        </div>
                    )
                    )}
                </div>
            </>
        )
    }
};

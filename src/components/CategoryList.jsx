import React, { PureComponent } from 'react'
import { Query, Field } from '@tilework/opus';

import { client } from '@tilework/opus';
import ProductCard from './ProductCard';

import {Navigate} from 'react-router';

import { Link } from 'react-router-dom';


export default class CategoryList extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {

        this.props.fetchProducts(this.props.category);

        console.log(this.props.products)


        // const getAllProducts = new Query('category', true)
        //     .addArgument("input", "CategoryInput", { title: this.props.category })
        //     .addField(new Field("products", true)
        //         .addFieldList(["id", "name", "gallery", "inStock"])
        //         .addField(new Field("prices")
        //             .addField(new Field("currency")
        //                 .addFieldList(["label", "symbol"])
        //             )
        //             .addFieldList(["amount"])
        //         )
        //     );


        // client.setEndpoint("http://localhost:4000");
        // client.post(getAllProducts)
        //     .then(result => this.setState({ products: result.category.products }));
    }

    render() {

        return (
            <>
                {this.props.products.map((product, idx) => (
                    <div key={idx} >
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
            </>
        )
    }
};

import React, { PureComponent, useEffect } from 'react'
import { Query, Field } from '@tilework/opus';

import { client, CombinedField } from '@tilework/opus';


export default class CategoryList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }



    componentDidMount() {
        const getAllProducts = new Query('category', true)
            .addArgument("input", "CategoryInput", { title: this.props.categoryName })
            .addField(new Field("products", true)
                .addFieldList(["id", "name", "gallery", "inStock"])
                .addField(new Field("prices")
                    .addField(new Field("currency")
                        .addFieldList(["label", "symbol"])
                    )
                    .addFieldList(["amount"])
                )
            );


        client.setEndpoint("http://localhost:4000");
        client.post(getAllProducts)
            .then(result => this.setState({ products: result.category.products }));



    }

    render() {

        console.log(this.state.products);

        return (
            <>
                {this.state.products.map(product => (
                    <>
                        <div>
                            <img src={product.gallery[0]} width="200px" />
                            <h1>{product.name}</h1>
                            <h6>{!product.inStock && "not in stock :("}</h6>
                            <p>{product.prices[0].currency.symbol}{product.prices[0].amount}</p>
                        </div>
                    </>
                )
                )}
            </>
        )
    }
};

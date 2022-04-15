import React, { PureComponent } from 'react'


export default class ProductCard extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    render() {
        return (
            <div>
                <img src={this.props.imgUrl} width="200px" alt={this.props.name}/>
                <h1>{this.props.name}</h1>
                <h6>{!this.props.inStock && "not in stock :("}</h6>
                <p>{this.props.symbol}{this.props.amount}</p>
            </div>
        )
    }
}

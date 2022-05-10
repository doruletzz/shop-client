import React, { PureComponent } from 'react'

export class Cart extends PureComponent {
    componentDidMount() {
        console.log(this.props.items);
    }

    render() {
        return (
            <div>
                {this.props.items.map(item => (
                    <div key={item.id}>
                        <h1>{item.name}</h1 >
                        <h2>{item.brand}</h2>
                        <h2>{item.prices[0].currency.symbol}{item.prices[0].amount}</h2>
                        {Object.entries(item.attributes).map(attribute => (
                            <div>{attribute.join(" : ")}</div>
                        ))}
                        <img src={item.gallery[0]} width="160px" />
                        <h3>{item.amount}</h3>
                    </div>
                ))}
                <h2>{this.props.quantity}</h2>
            </div>
        )
    }

}

export default Cart;
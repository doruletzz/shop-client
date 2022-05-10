import React, { PureComponent } from 'react'

import styles from './DropdownCurrency.module.scss';

export class DropdownCurrency extends PureComponent {

    componentDidMount(){
        this.props.fetchCurrencies();
        console.log(this.props.currencies)
    }


    render() {
        return (
            <div className={styles.currency}>
                <button className={styles.drop_button}>💲</button>
                <div className={styles.drop_content}>
                    {this.props.currencies && this.props.currencies.map((currency, idx) => (
                        <button key={idx} onClick={() => this.props.updateCurrencyIndex(idx)}>{currency.symbol} {currency.label}</button>
                    ))}

                </div>
            </div>
        )
    }
}

export default DropdownCurrency
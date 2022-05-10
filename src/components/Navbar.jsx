import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DropdownCurrency from './DropdownCurrency';
import DropdownCurrencyWrapper from './DropdownCurrencyWrapper';

import styles from './Navbar.module.scss';

export default class Navbar extends Component {


    render() {
        return (
            <div className={styles.wrapper}>

                <nav className={styles.navbar}>
                    <ul className={styles.links}>
                        <Link to="/all">
                            <li className={styles.link} >
                                ALL
                            </li>
                        </Link>
                        <Link to="/tech">
                            <li className={styles.link} >
                                TECH
                            </li>
                        </Link>
                        <Link to="/clothes">
                            <li className={styles.link} >
                                CLOTHES
                            </li>
                        </Link>
                    </ul>
                    <div className={styles.brand}>logo</div>
                    <div className={styles.rhs}>
                        <DropdownCurrencyWrapper />
                        <Link to="/cart"> 🛒
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

import React, { Component } from 'react'

import styles from './Navbar.module.scss';

export default class Navbar extends Component {
    render() {
        return (
            <nav className={styles.navbar}>
                <ul className={styles.links}>
                    <a href="#women">
                        <li className={styles.link} >
                            women
                        </li>
                    </a>
                    <a href="#men">
                        <li className={styles.link} >
                            men
                        </li>
                    </a>
                    <a href="#kids">
                        <li className={styles.link} >
                            kids
                        </li>
                    </a>
                </ul>
                <div className={styles.brand}>logo</div>
                <div className={styles.cart}>cart</div>
            </nav>
        )
    }
}

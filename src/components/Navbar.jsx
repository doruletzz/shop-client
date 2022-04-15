import React, { Component } from 'react'

import styles from './Navbar.module.scss';

export default class Navbar extends Component {
    render() {
        return (
            <nav className={styles.navbar}>
                <ul className={styles.links}>
                    <a href="/all">
                        <li className={styles.link} >
                            all
                        </li>
                    </a>
                    <a href="/tech">
                        <li className={styles.link} >
                            tech
                        </li>
                    </a>
                    <a href="/clothes">
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

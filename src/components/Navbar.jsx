import React, { Component } from 'react'

import styles from './Navbar.module.scss';

export default class Navbar extends Component {
    render() {
        return (
            <div className={styles.wrapper}>

                <nav className={styles.navbar}>
                    <ul className={styles.links}>
                        <a href="/all">
                            <li className={styles.link} >
                                ALL
                            </li>
                        </a>
                        <a href="/tech">
                            <li className={styles.link} >
                                TECH
                            </li>
                        </a>
                        <a href="/clothes">
                            <li className={styles.link} >
                                CLOTHES
                            </li>
                        </a>
                    </ul>
                    <div className={styles.brand}>logo</div>
                    <div className={styles.cart}>cart</div>
                </nav>
            </div>
        )
    }
}

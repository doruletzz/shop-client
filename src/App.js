import React, { Component } from 'react';
import CategoryListWrapper from './components/CategoryListWrapper';
import Navbar from './components/Navbar';

import styles from './App.module.scss';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { store } from './redux/app/store';
import { Provider } from 'react-redux';
import ProductWrapper from './components/ProductWrapper';
import Cart from './components/Cart';
import CartWrapper from './components/CartWrapper';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <div className={styles.container}>
            <Routes>
              <Route path="/:category/:productId" element={<ProductWrapper />} />
              <Route path="/:category" element={<CategoryListWrapper />} />
              <Route path="/cart" element={<CartWrapper />} />
              {/* <Route path="/:category/:productId" element={} /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

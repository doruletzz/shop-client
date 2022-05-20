import React, { Component } from 'react';

import CategoryListWrapper from './pages/category/CategoryListWrapper';
import ProductWrapper from './pages/product/ProductWrapper';
import CartWrapper from './pages/cart/CartWrapper';

import Navbar from './components/Navbar';
import styles from './App.module.scss';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { store } from './features/app/store';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <div className={styles.container}>
            <Routes>
              <Route exact path="/:category/:productId" element={<ProductWrapper />} />
              <Route exact path="/:category" element={<CategoryListWrapper />} />
              <Route exact path="/cart" element={<CartWrapper />} />
              <Route path="*" element={<Navigate to="/all" replace />} />
              {/* <Route path="/:category/:productId" element={} /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

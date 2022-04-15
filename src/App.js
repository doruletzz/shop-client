import React, { Component } from 'react'
import CategoryListWrapper from './components/CategoryListWrapper'
import Navbar from './components/Navbar'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { store } from './redux/app/store'
import { Provider } from 'react-redux'
import Product from './components/Product'
import ProductWrapper from './components/ProductWrapper'

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>

          <Navbar />

          <BrowserRouter>
            <Routes>
              <Route path="/:category/:productId" element={<ProductWrapper />} />
              <Route path="/:category" element={<CategoryListWrapper />} />
              {/* <Route path="/:category/:productId" element={} /> */}
            </Routes>
          </BrowserRouter>

        </Provider>
      </>
    )
  }
}


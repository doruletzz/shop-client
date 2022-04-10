import React, { Component } from 'react'
import CategoryList from './components/CategoryList'
import Navbar from './components/Navbar'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <CategoryList categoryName={"tech"} />
      </>
    )
  }
}


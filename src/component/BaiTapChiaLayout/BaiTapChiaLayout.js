import React, { Component } from 'react'
import HeaderBT from './HeaderBT'
import ProductBT from './ProductBT'

export default class BaiTapChiaLayout extends Component {
  render() {
    return (
        <div>
            <HeaderBT />
            <ProductBT />
        </div>
    )
  }
}

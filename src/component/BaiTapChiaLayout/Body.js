import React, { Component } from 'react'
import Banner from './Banner'
import Content from './Content'

export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Content />
      </div>
    )
  }
}

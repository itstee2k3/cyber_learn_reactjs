import React, { Component } from 'react'
import Item from './Item'

export default class Content extends Component {
  render() {
    return (
      <section class="pt-4">
        <div class="container px-lg-5">
          <div class="row gx-lg-5">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </section>
    )
  }
}

import React, { Component } from 'react'
import HeaderBT from './HeaderBT'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'
import Banner from './Banner'
import Body from './Body'

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
  render() {
    return (
      <div className='container-fluid'>

        <div className='row'>
            <div className='col-12'>
                <HeaderBT />
            </div>
        </div>

        <div className='row'>
            <div className='col-12'>
                <Body />
            </div>
        </div>

        {/* <div className='row'>
            <div className='pe-0 col-4'>
                <Banner />
            </div>
            <div className='ps-0 col-8'>
                <Content />
            </div>
        </div> */}

        <div className='row'>
            <div className='col-md-12'>
                <Footer />
            </div>
        </div>

      </div>
    )
  }
}

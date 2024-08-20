import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgproduct: require('../assets/products/black-car.jpg'),
    }

    renderCar = (imgNewProduct) => {
        //tạo state mới
        // let newState = {
        //     imgproduct: imgNewProduct
        // }

        // this.setState(newState)

        this.setState({
            imgproduct: imgNewProduct
        })

    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-7'>
                        <img className="w-100" src={this.state.imgproduct} alt='' />
                    </div>

                    <div className='col-5'>
                        <div className="card text-dark ">
                            <div className='card-header text-primary'>Exterior Color</div>
                            <div className="card-body">
                                <div className='row border border-link pt-2 pb-2 m-1 cursor-pointer' onClick={() => {this.renderCar(require('../assets/products/black-car.jpg'))}}>
                                    <div className='col-2 d-flex align-items-center'>
                                        <img className='w-100' src={require("../assets/icons/icon-black.jpg")} alt=''/>
                                    </div>
                                    <div className='col-10 d-flex flex-column'>
                                        <h3>
                                            Crystal Black
                                        </h3>
                                        <p>
                                            Pear
                                        </p>
                                    </div>
                                </div>

                                <div className='row border border-link pt-2 pb-2 m-1 cursor-pointer' onClick={() => {this.renderCar(require('../assets/products/steel-car.jpg'))}}>
                                    <div className='col-2 d-flex'>
                                        <img className='w-100 m-auto' src={require("../assets/icons/icon-steel.jpg")} alt=''/> 
                                    </div>
                                    <div className='col-10'>
                                        <h3 className=''>
                                            Modern Steel
                                        </h3>
                                        <p>
                                            Metallic
                                        </p>
                                    </div>
                                </div>

                                <div className='row border border-link pt-2 pb-2 m-1 cursor-pointer' onClick={() => {this.renderCar(require('../assets/products/silver-car.jpg'))}}>
                                    <div className='col-2 d-flex'>
                                        <img className='w-100 m-auto' src={require("../assets/icons/icon-silver.jpg")} alt=''/>
                                    </div>
                                    <div className='col-10'>
                                        <h3 className=''>
                                            Lunar Sliver
                                        </h3>
                                        <p>
                                        Metallic
                                        </p>
                                    </div>
                                </div>

                                <div className='row border border-link pt-2 pb-2 m-1 cursor-pointer' onClick={() => {this.renderCar(require('../assets/products/red-car.jpg'))}}>
                                    <div className='col-2 d-flex'>
                                        <img className='w-100 m-auto' src={require("../assets/icons/icon-red.jpg")} alt=''/>
                                    </div>
                                    <div className='col-10'>
                                        <h3 className=''>
                                            Rallye Red
                                        </h3>
                                        <p>
                                        Metallic
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

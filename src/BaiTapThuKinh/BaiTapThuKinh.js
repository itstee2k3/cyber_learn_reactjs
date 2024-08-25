import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'
import '../BaiTapThuKinh/BaiTapThuKinh.css'
export default class BaiTapThuKinh extends Component {

    state = {
        glassesCurrent: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderDataList = () => {
        return dataGlasses.map((glassesItem,index) => {
            return (
                <img onClick={() => {this.changeGlasses(glassesItem)}} key={index} className='border border-width-1 ms-1' src={glassesItem.url} alt={glassesItem.name} style={{width: '100px', cursor: 'pointer'}}/>
            )
        })
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassesCurrent: newGlasses
        })
    }

    render() {

        const keyFrame = `@keyframes animChangGlasses${Date.now()} {
            from{
                width: 0;
                transform: rotate(45deg);
            } 
            to {
                width: 150px;
                transform: rotate(0deg);
            }
        }`

        const styleGlass = {
            width: '150px',
            top: '72px',
            right: '84px',
            opacity: '0.8',
            trasform: 'rotate(0deg)',
            animation: `animChangGlasses${Date.now()} 1s`
        }

        const infoGlass = {
            width: '250px',
            top: '200px',
            left: '285px',
            paddingLeft: '15px',
            backgroundColor: 'orange',
            textAlign: 'left',
            height: '105px',
            opacity: '0.7',
        }
        return (
            <div style={{
                backgroundImage: 'url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3Vwd2s2MTg0MzM0NC13aWtpbWVkaWEtaW1hZ2UtbGtocWw2YWIuanBn.jpg)',
                backgroundSize: '2000px',
                minHeight: '2000px'
            }}>
                <style>
                    {keyFrame}
                </style>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', minHeight: '2000px' }}>
                    <h3 style={{ backgroundColor: 'rgba(0,0,0,.6)', height: '100px' }} className='d-flex justify-content-center align-items-center text-light'>
                        TRY GLASSES APP ONLINE
                    </h3>
                    <div className='container-fluid'>
                        <div className='row text-center mt-5'>
                            <div className='col-6'>
                                <div className='position-relative'>
                                    <img className='position-absolute' style={{ width: '250px' }} src="./glassesImage/model.jpg" alt='model.jpg' />
                                    <img className='position-absolute' style={styleGlass} src={this.state.glassesCurrent.url} alt='kinh' />
                                    <div className='position-relative' style={infoGlass}>
                                        <span className='fw-bold text-primary fs-5'>{this.state.glassesCurrent.name}</span>
                                        <br/>
                                        <span className='fs-6 text-dark'>{this.state.glassesCurrent.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt='model.jpg' />
                            </div>

                        </div>
                    </div>
                    <div className='bg-light container text-center mt-5 d-flex justify-content-center p-5'>
                        {this.renderDataList()}
                    </div>
                </div>
            </div>
        )
    }
}

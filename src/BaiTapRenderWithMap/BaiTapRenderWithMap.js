import React, { Component } from 'react'
import dataFilm from "../Data/DataFilm.json"
import bgImage from '../assets/bgFilm/avanger.jpg';

export default class BaiTapRenderWithMap extends Component {

    renderDataFilm = () => {
        let renderDataFilm = dataFilm.map((dataFilm, index) => {
            return (
                <div className="col w-25" key={index}>
                    <div className="card p-1 h-100">
                        <img src={dataFilm.hinhAnh} className="card-img-top" alt={dataFilm.maPhim}
                            style={{
                                maxHeight: '350px',   // Giới hạn chiều cao tối đa của ảnh
                                maxWidth: '100%',     // Giới hạn chiều rộng tối đa của ảnh
                                objectFit: 'contain', // Đảm bảo ảnh vừa với khung mà không bị cắt
                                margin: 'auto',       // Căn giữa ảnh nếu nhỏ hơn khung
                                display: 'block',     // Đảm bảo margin:auto hoạt động trên ảnh
                            }}
                        />
                        <div className="card-body">
                            <h5 className="card-title" style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 1, /* Giới hạn số dòng */
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                {dataFilm.tenPhim}
                            </h5>
                            <p className="card-text h-25">
                                This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>

            )
        })
        return renderDataFilm
    }
    render() {
        return (
            <div className="position-relative w-100 h-100"
                style={{
                    marginTop: '56px',
                    backgroundImage: `url(${bgImage})`,
                    // backgroundSize: 'auto',    // Để hình ảnh không bị thay đổi kích thước
                    // backgroundRepeat: 'repeat', // Để hình ảnh lặp lại
                    // backgroundPosition: 'left top', // Để hình ảnh bắt đầu từ góc trên trái
                }}
            >
                <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', minHeight: '2500px'}}>
                    <div className="position-fixed w-100 z-1 top-0" >
                        <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: 'rgb(87,83,149)' }}>
                            <div className="container-fluid">
                                <a className="navbar-brand text-white" href="#">XT MOVIE</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#">Link</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className=" position-relative d-flex justify-content-center align-items-center vh-100 text-white row row-cols-1 row-cols-md-2 g-4 p-5">

                        {this.renderDataFilm()}
                    </div>
                </div>

            </div>
        )
    }
}

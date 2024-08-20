import React, { Component } from 'react'
import HeaderBT from '../component/BaiTapChiaLayout/HeaderBT';

export default class DataBinding extends Component {

    //thuộc tính
    name = 'Bùi Xuân Thắng';

    //thuộc tính object
    student = {
        name: "TTT",
        age: 18
    }

    //binding phương thức(hàm của lớp đối tượng)
    //tất cả hàm render đều phải trả về component
    renderImage = () => {
        return <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-con-gai-1-1.jpg" alt="anhgai" />
    }

    renderMultiComponent = () => {
        return <nav className="nav justify-content-center bg-dark ">
            <a className="nav-link active" href="#" aria-current="page">Active link</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled" href="#">Disabled link</a>
        </nav>
    }

    renderInforVirus = () => {
        const virus = {
            age: 10,
            name: "corona"
        }
        return (
            <div className="card text-start" >
                <img className="card-img-top" src="holder.js/100px180/" alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{virus.age}</h4>
                    <p className="card-text">{virus.name}</p>
                </div>
            </div >
        )
    }

    //hàm
    render() {

        //biến
        const school = 'HUTECH';

        return (
            <div>
                <h1>{this.name} - {school}</h1>
                <hr />
                <h3>{this.student.name} - {this.student.age}</h3>
                {this.renderImage()}
                {this.renderMultiComponent()}
                {this.renderInforVirus()}
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class RenderWithLoop extends Component {

    listProduct = [
        { id: 1, name: 'black-car', price: 1000, img: './carbasic/products/black-car.jpg' },
        { id: 2, name: 'steel-car', price: 1000, img: './carbasic/products/steel-car.jpg' },
        { id: 3, name: 'silver-car', price: 1000, img: './carbasic/products/silver-car.jpg' },
        { id: 4, name: 'red-car', price: 1000, img: './carbasic/products/red-car.jpg' }

    ]

    renderTable = () => {
        //cách 1: render array object sử dụng for
        // let mangTrComponent = [];
        // for(let index = 0; index<this.listProduct.length;index++){
        //     let product = this.listProduct[index];
            
        //     //doi tuong jsx có thể console.log để kiểm tra
        //     let TrJSX = (
        //         <tr key={index}>
        //             <td>{product.id}</td>
        //             <td>{product.name}</td>
        //             <td>{product.price}</td>
        //             <td>
        //                 <img className='img-fluid' style={{width: '100px'}} src={product.img} alt=''/>
        //             </td>
        //         </tr>
        //     )
        //     mangTrComponent.push(TrJSX);

        //cách 2: dùng map
        let mangTrComponent = this.listProduct.map((product,index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.img} style={{width: '200px'}} alt='hi'/></td>
                <td></td>
            </tr>
        })

        return mangTrComponent;
    }

    render() {
        return (
            <div className='container'>
                <div className="table-responsive">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">price</th>
                                <th scope="col">img</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

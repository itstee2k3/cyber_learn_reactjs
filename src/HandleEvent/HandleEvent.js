import React, { Component } from 'react'

export default class HandleEvent extends Component {

    //Định nghĩa hàm xử lý sự kiện khi người dùng click vào button click me
    handleClick = (name) =>{
        alert("hello " + name)
    }

    //Truyền tham số xử lý khi click
    handleClickParam = (button) => {
        alert("param " + button)
    }
    render() {
        return (
            <div>
                <button onClick={ () => {this.handleClick("Thang")}}>CLick me1</button>

                <button onClick={ this.handleClickParam.bind(this,"hello men")}>CLick me</button>
            </div>
        )
    }
}

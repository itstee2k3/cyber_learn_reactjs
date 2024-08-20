import React, { Component } from 'react'

export default class RenderingCondition extends Component {


    login = false;
    name = "Bui Xuan Thang";

    renderContent = () => {
        if(this.login)
            return <p>hello {this.name}</p>
        return <button>Đăng nhập</button> 
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

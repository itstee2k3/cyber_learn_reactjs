import React, { Component } from 'react'

export default class StateDemo extends Component {

    state = {
        status: false
    }

    user = {
        name: "Thang",
        age: 12
    }

    Login = () => {
        let newsate = {
            status: true,
        }
        this.setState(newsate)
    }

    renderUserLogin = () =>{
        if(this.state.status)
            return <p className='text-center'>Hello {this.user.name}</p>
        return <button onClick={this.Login}>Login</button>
    }
    render() {
        return (
            <div>{this.renderUserLogin()}</div>
        )
    }
}

import React, { Component } from 'react'
import './Styling.css';
import Child from './Child';
import StyleModule from './Styling.module.css'

export default class Styling extends Component {


    render() {
        const StyleConst = {
            color: 'pink',
            backgroundColor: 'Yellow',
            padding: '15px'
        }
        return (
            <div>
                <Child />
                <div className='txt'>Styling</div>
                <div className={StyleModule.txtModule}>StylingModule</div>
                <div style={StyleConst}>StyleConst</div>
                <div style={{
                    color: 'pink',
                    backgroundColor: 'Green',
                    padding: '15px'
                }}>StyleInLine</div>

            </div >
        )
    }
}

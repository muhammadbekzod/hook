import React, { Component } from 'react'
import App from './app.jsx';

export default class root extends Component {
    constructor(props){
        super(props)
        console.log('constructor');
    }
    render() {
        console.log('render');
        return (
            <div>
                <App />
            </div>
        )
    }
}

import React, { Component } from 'react'


export class WelcomePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log(this.props.Email)
        return (
           
            <div>
                <h1> {this.props.Email}</h1>
            </div>
        )
    }
}

export default WelcomePage

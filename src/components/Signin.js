import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WelcomePage from './WelcomePage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import './signin.css'

 const Header = (props) =>{

    return (<div className="MainDiv"> <h1> Welcome to Lehmbar</h1>
         <div></div>
    
    </div>);
 }

 const SignInForm = (props) =>{
     return(
         <form className="Form">
             <h1>Sign In</h1>
             <TextField  className="Textfiell" value={props.Email} validate="true" id="standard-basic" onChange={props.onChangeEmai} fullWidth autoFocus  type="email" variant="outlined"  placeholder="email"  label="Username" />
             <TextField className="Textfiell" value={props.password} id="standard-basic" onChange={props.onChangePasswor} fullWidth type="password" variant="outlined" placeholder="password" label="Password" />
             <Button variant="contained" color="primary" onClick={props.method}>Submit </Button>
         </form>
     )
 }

export class Signin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:"",
             submit:'',
             email:[],

 
            }
 
              this.senddata = this.senddata.bind(this);
              this.onChangeEmail = this.onChangeEmail.bind(this)
              this.onChangePassword = this.onChangePassword.bind(this)
        }
    

     onChangeEmail(e){
        this.setState({
            email:e.target.value,
        })
        console.log(this.state.email)
     }   


     onChangePassword(e){
        this.setState({
            password:e.target.value,
        })
        console.log(this.state.password)
     }   

    senddata(){
        var email = this.state.email;
        var password = this.state.password;
        if( email !== "" && password !== " "){
                  console.log(email + " " + password)
                  window.location = '/gurpreet';
        }
        else{
            alert("your email is not valid")
        }
    }



    render() {
        return (
            <div className="RenderDiv">
                <Header/>
                <SignInForm Email={this.state.email} password={this.state.password} method = {this.senddata} onChangeEmai={this.onChangeEmail} onChangePasswor={this.onChangePassword}/>
                <WelcomePage Email={this.state.email}/>
            </div>
        )
    }
}

export default Signin

import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WelcomePage from './WelcomePage';
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


 const NoMatchPage = () => {
    return (
      <h3>404 - Not found</h3>
    );
  };


 const  data = [
     { title:" ddhjdjdfhjkf",time:"2040",completed:true},
     { title:" ddhjdjdfhjkf",time:"2040",completed:true},
     { title:" ddhjdjdfhjkf",time:"2040",completed:true},
     { title:" ddhjdjdfhjkf",time:"2040",completed:true},
     { title:" ddhjdjdfhjkf",time:"2040",completed:true},

 ]
export class Signin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:data,
             password:data[0].title,
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
                  window.location = '/about';
        }
        else{
            alert("your email is not valid")
        }
    }



    render() {

        console.log(data[0].title)
        return (
               <Router>
                   
                     <div>
                                  <nav style={style}>
                                    
                                        <Link style={{color:"white",textDecoration:"none"}} to="/">Home</Link>
                                      
                                        <Link style={{color:"white",textDecoration:"none"}}  to="/about">About</Link>
                                      
                                        <Link style={{color:"white",textDecoration:"none"}}  to="/users">Users</Link>      
                                  </nav>
           
                   
                                  <div className="RenderDiv">
                                         <Switch>
                                                       <Route path="/about">
                                                       <Header/>
                                                       <SignInForm Email={this.state.email} password={this.state.password} method = {this.senddata} onChangeEmai={this.onChangeEmail} onChangePasswor={this.onChangePassword}/>  
                                                       </Route>
                                                       
                                                                     <Route path="/users">
                                                                     <WelcomePage Email={this.state.password} fulldata={data} />
                                                                     </Route>
                                                     
                                                      <Route path="/">
                                                       <Header/>
                                                       <SignInForm Email={this.state.email} password={this.state.password} method = {this.senddata} onChangeEmai={this.onChangeEmail} onChangePasswor={this.onChangePassword}/>        
                                                       </Route>
                                                    
                                                     <Route component={NoMatchPage} />
                                         </Switch>
                                         
                                    </div>
                          </div>
    </Router>
            
        )
    }
}
const style = {
    width:"100%",
    padding:"10px",
    display:"flex",
    flexFlow:"row wrap",
    justifyContent:"space-evenly",
    alignItem:"center",
    color:"white",
    backgroundColor:"black"
   }
export default Signin

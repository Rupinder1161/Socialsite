import React, { Component } from 'react'
import './welcomepage.css'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Todo from './Todo'








const Welcome = (props) =>{

    return(
                                      <div className="WelcomeMainDiv">
                                        <div className="Welcomeone">
                                                 <section>
                                                 <Avatar alt="Remy Sharp" src="https://media-exp1.licdn.com/dms/image/C5103AQEycaMmAmXceQ/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=pvVntk2JlKpPBJSl-2uVjiKH444g3Em4E8gwN54AxVk" />      
                                                 </section>
                                                 
                                                 <section>
                                                 
                                                 Computer Science Graduate | Seeking Full Time Software Developer Job | Java ,JavaScript,React,SQL Front & Back end
                                                   
                                                 </section>
                                                 
                                       
            
                                        </div>
        
        
        
        
        
                                     <Todo email={props.email}/>
                                     
          <div className="Welcomethree">ee</div>
        </div>
    )
             
    
}

export class WelcomePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        // console.log(this.props.data)
        return (
            <div className="WelcomeMainDiv">
                <Welcome email={this.props.Email}/>
            </div> 
        )
    }
}


export default WelcomePage

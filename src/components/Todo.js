import React, { Component } from 'react'
import Button from '@material-ui/core/Button';



const Pushbtn = (props) =>{
    return(
        <Button variant="contained" color="primary">
        Primary
      </Button>
    )
}

export class Todo extends Component {
            
    constructor(props) {
        super(props)
    
        this.state = {
              love:"Hello"
        }
    }


    

    render() {


  console.log(this.props.email)
 

        return (
            <div>
                <div className="Welcometwo">
                                           
                                           <section className="input">
                                           <input type="text" id="fname" name="fname" placeholder="start a post" style={inputStyle}/>
                                             <div className="inputButton">  
                                               <Pushbtn data={this.state.data}/>
                                                </div>                   
                                           </section>
                                           <section>
                                          { this.props.email}
                                           </section>
                                     </div>
            </div>
        )
    }
}

const inputStyle ={
    width:"100%",
    height:"50px",
    wordWrap: "break-word",
    wordBreak:"break-all"
}
export default Todo

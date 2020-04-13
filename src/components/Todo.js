import React, { Component } from 'react'
import Button from '@material-ui/core/Button';



const Pushbtn = (props) =>{
    return(
        <Button variant="contained" color="primary" onClick={props.lubmit}>
        Post
      </Button>
    )
}

 



export class Todo extends Component {
            
    constructor(props) {
        super(props)
    
        this.state = {
              love:this.props.email,
              newValue:"",
        }
        this.onUpdate = this.onUpdate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onUpdate(e){
        this.setState({
            newValue:e.target.value,
        })
        // console.log(this.state.newValue)
       this.onSubmit()
     } 
      
     onSubmit(){
      
      var h = this.props.fulldatatodo;
      var  m = { title:this.state.newValue};
        
        h.push(m)
        console.log(this.props.fulldatatodo);
     }



    render() {
        
       
         const data = this.props.fulldatatodo
        return (
            <div>
                <div className="Welcometwo">
                                           
                                           <section className="input">
                                           <input type="text" id="fname" name="fname" placeholder="start a post" onChange={this.onUpdate}  style={inputStyle.input}/>
                                             <div className="inputButton">  
                                               <Pushbtn data={this.state.love} lubmit={this.onSubmit} />
                                                </div>                   
                                           </section>
                                           <section style={inputStyle.sectionPost}>
                                         { data.map(e => <h1 style={inputStyle.h1}>{e.title}</h1> )}
                                           </section>
                                     </div>
            </div>
        )
    }
}

const inputStyle ={
  input : {
    width:"100%",
    height:"50px",
    wordWrap: "break-word",
    wordBreak:"break-all"
  },
  sectionPost : {
      width:"100%",
      backgroundColor:"red",
      display:"flex",
      flexFlow:"row wrap",
      justifyContent:"center"
  },
  h1:{
      width:"100%",
      backgroundColor:"green",
  }  
}

export default Todo

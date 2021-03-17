import React, { Component } from 'react';
import Bulb from './Bulb.js';


class Switch extends Component{
    constructor(props){
        super(props);
        this.state={
            action: ""
        }
    }
    on = ()=>{
        this.setState({
            action: "on"
        })
    }

    off = ()=>{
        this.setState({
            action: "off"
        })
    }
    
    
    render(){
        return(
            <div>
             
    <div>
                
                <button onClick={this.on}>On</button>
                <button onClick={this.off}>Off</button>
                <Bulb action={this.state.action}/>

    </div>
            
            </div>
        )
    }
}
export default Switch;
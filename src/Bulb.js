import React, { Component } from 'react';
import on from './images/on.gif';
import off from './images/off.gif';


class Bulb extends Component{
    constructor(props){
        super(props);
        console.log(this.props.action);
    }

    
    
    render (){
        return(
            <div>
                <center>
                
                <img src={on} />
                </center>
 
            </div>
        )
    
        }
}
export default Bulb;
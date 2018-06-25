import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            picture: ""
         }
    }

   
    
    render() { 
        return ( 
            <div>
                <div className="text-center">
                <img src="https://www.loveartpassion.com/logo/logo-painted/creation-of-the-world.jpg" id="chng" />
                <h1>World Of Paintings</h1>
                </div>
            </div>
         )
    }
}
 
export default Home;
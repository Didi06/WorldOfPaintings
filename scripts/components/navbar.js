import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="navbar">
                <div className="float-left">
                    
                </div>
                <div className="float-right">
                    <button type="button" className="menubutton btn btn-dark"><Link to="/" >HomePage</Link></button>
                    <button type="button" className="menubutton btn btn-light"><Link to="/artists">Artist</Link></button>
                    <button type="button" className="menubutton btn btn-dark"><Link to="/art">Art</Link></button>
                    <button type="button" className="menubutton btn btn-light"><Link to="/cart">My Cart</Link></button>
                    <button type="button" className="menubutton btn btn-dark"><Link to="/login">Login</Link></button>
                </div>
            </div >
          )
    }
}
 
export default NavBar;
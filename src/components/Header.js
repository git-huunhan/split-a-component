import React, {Component} from 'react';
import icon from './return.png';
import logo from './logo.png';
import './Header.css';

class Header extends Component{
  render(){
    return(
      <div className="Header">
        <div className="Return">
          <div className="Return-icon">
            <img src={icon} className="icon" alt="return-icon" />
          </div>
          <div className="Return-text">
            <p>
              Go back
            </p>
          </div>
        </div>
        
        <div className="Logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="Button-signup">
          <p>Sign Up</p>
        </div>
      </div>
    );
  }
}

export default Header;
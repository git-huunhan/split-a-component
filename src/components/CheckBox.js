import React, {Component} from 'react';
import icon from './checkbox.png';
import './CheckBox.css';

class CheckBox extends Component{
  render(){
    return(
      <div className="CheckBox">
        <div className="Box">
          <img src={icon} className="icon" alt="box-icon" />
        </div>
        <div className="Box-text">
          <p>
            {this.props.title}
          </p> 
        </div>
      </div>
    );
  }
}

export default CheckBox;
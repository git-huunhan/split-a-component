import React, {Component} from 'react';
import './SummitButton.css';

class SummitButton extends Component{
  render(){
    return(
      <div className="SummitButton">
        <p>
          {this.props.title}
        </p>
      </div>
    );
  }
}

export default SummitButton;
import React, {Component} from 'react';
import './Form.css';

class Form extends Component{
  render(){
    return(
      <div className="Form">
        <div className="Form-child">
          <div className="Username">
            <p>
              {this.props.title}
            </p>
          </div>
          <div className="Name">
            <p>
              {this.props.name}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
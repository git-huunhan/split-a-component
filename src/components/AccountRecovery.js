import React, {Component} from 'react';
import './AccountRecovery.css';

class AccountRecovery extends Component{
  render(){
    return(
      <div className="AccountRecovery">
        <div className="f-username">
          <p>
            {this.props.title1}
          </p>
        </div>
        <div className="f-password">
          <p>
            {this.props.title2}
          </p>
        </div>
      </div>
    );
  }
}

export default AccountRecovery;
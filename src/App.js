import React from 'react';
import Header from './components/Header';
import Label from './components/Label';
import Form from './components/Form';
import SummitButton from './components/SummitButton';
import CheckBox from './components/CheckBox';
import AccountRecovery from './components/AccountRecovery';

function App() {
  return (
    <div>
      <Header/>
      <Label/>
      <Form title="Username" name="Huu Nhan"/>
      <Form title="Password" name="**************************"/>
      <SummitButton title="SignIn to CodersX"/>
      <CheckBox title="Keep me signed in"/>
      <AccountRecovery title1="Forgot username?" title2="Forgot password?"/>
    </div>
    
  );
}

export default App;

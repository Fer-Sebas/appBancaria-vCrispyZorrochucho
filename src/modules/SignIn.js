import React from 'react'
import { DialogCard } from './Cards';
import Divider from './Divider';
import SignInForm from './SignIn.Form'

document.body.classList.remove('red')

class SignIn extends React.Component {

  render() { 
    return (
      <>
        <DialogCard>
          <h1>App Bancaria</h1>
          <p>¿No tienes cuenta?<br />Registrate haciendo <b className='link' onClick={() => this.props.handleViewChange(2)} href="/">click aqui</b></p>
          <Divider />
          <SignInForm />
        </DialogCard>
      </>
    );
  }
}
 
export default SignIn;

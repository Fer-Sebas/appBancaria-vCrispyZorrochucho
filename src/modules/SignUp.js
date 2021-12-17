import React from 'react'
import SignUpForm from './SignUp.Form'
import Divider from './Divider'
import { DialogCard } from './Cards'

class SignUp extends React.Component {

  render() { 
    return (
      <>
        <DialogCard>
          <h1>Registrate</h1>
          <p>¿Ya tienes tu propio usuario? <b className='link' onClick={() => this.props.handleViewChange(1)} href="/">Ingresa</b></p>     
          <Divider /> 
          <p>Para crear tu usuario, por favor rellena por completo los siguientes campos:</p>
          <br />
          <SignUpForm />
          <p className="altText">Una vez creado tu usuario podras crear una cuenta</p>
        </DialogCard>
      </>
    )
  }
}
 
export default SignUp
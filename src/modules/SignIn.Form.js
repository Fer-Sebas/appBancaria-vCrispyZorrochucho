import React from 'react'

class SignInForm extends React.Component {

  constructor (props) {
    super (props)    

    this.onChangeUser = this.onChangeUser.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)


    this.state = { 
      username: '',
      password: '' 
    }

  }
  
  onChangeUser (e) { this.setState({ username: e.target.value }) }
  onChangePassword (e) { this.setState({ password: e.target.value }) }

  onSubmit (e) {

    e.preventDefault()

    const user = {
      username: this.state.username,
      password: this.state.password,
    }

    console.log(this.state)
    // To Do: Set API route for handling login

  }

  render() {
    return (
      <form name="SignInForm" id="SignInForm" onSubmit={this.onSubmit}>
          
          <div className="fieldGroup">
            <label htmlFor="email">Email</label>
            <input type="email" title="email" value={this.state.username} onChange={this.onChangeUser} />
          </div>
  
          <div className="fieldGroup">
            <label htmlFor="password">Contraseña</label>
            <input type="password" title="password" value={this.state.password} onChange={this.onChangePassword} />
          </div>
          
          <br />
  
          <button className="main">Ingresar</button>
          
      </form>
    );
  }

}

export default SignInForm;
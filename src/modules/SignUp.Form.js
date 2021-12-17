import React from 'react'
import axios from 'axios'

class SignUpForm extends React.Component {

  constructor (props) {
    super (props)

    this.onChangeNames = this.onChangeNames.bind(this)
    this.onChangeSurnames = this.onChangeSurnames.bind(this)
    this.onChangeAddress = this.onChangeAddress.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangeBirthdate = this.onChangeBirthdate.bind(this)
    this.onChangeIdNumber = this.onChangeIdNumber.bind(this)
    this.onChangeIdDate = this.onChangeIdDate.bind(this)
    this.onChangeIdType = this.onChangeIdType.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      names: '',
      surnames: '',
      address: '',
      email: '',
      birthdate: '',
      idNumber: 0,
      idDate: '',
      idType: '',
      password: ''
    }

  }

  onChangeNames (e) { this.setState({ names: e.target.value }) }
  onChangeSurnames (e) { this.setState({ surnames: e.target.value }) }
  onChangeAddress (e) { this.setState({ address: e.target.value }) }
  onChangeEmail (e) { this.setState({ email: e.target.value }) }
  onChangeBirthdate (e) { this.setState({ birthdate: e.target.value }) }
  onChangeIdNumber (e) { this.setState({ idNumber: e.target.value }) }
  onChangeIdDate (e) { this.setState({ idDate: e.target.value }) }
  onChangePassword (e) { this.setState({ password: e.target.value }) }
  onChangeIdType (e) { this.setState({ idType: e.target.value }) }

  onSubmit (e) {

    e.preventDefault()

    const newUser = {
      username: { first: this.state.names, last: this.state.surnames },
      idDoc: { type: this.state.idType, number: this.state.idNumber, date: this.state.idDate },      
      birthdate: this.state.birthdate,      
      email: this.state.email,
      address: this.state.address,
      password: this.state.password
    }

    console.log(newUser)
    
    axios
    .post('http://localhost:5000/users', newUser)
    .then( res => {console.log(res)} ).catch(err => { console.error(err) })

  }


  render () {
    return (
      <form name="SignUpForm" id="SignUpForm" onSubmit={this.onSubmit}>
          
          <div className="fieldGroup">
            <label htmlFor="firstName">Nombres</label>
            <input type="text" title="firstName" value={this.state.names} onChange={this.onChangeNames} />
          </div>
  
          <div className="fieldGroup">
            <label htmlFor="lastName">Apellidos</label>
            <input type="text" title="lastName" value={this.state.surnames} onChange={this.onChangeSurnames} />
          </div>
  
          <br />
  
          <div className="fieldGroup">
            <label htmlFor="address">Dirección</label>
            <input type="text" title="address" value={this.state.address} onChange={this.onChangeAddress} />
          </div>
  
          <div className="fieldGroup">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" title="email" value={this.state.email} onChange={this.onChangeEmail} />
          </div>

          <div className="fieldGroup">
            <label htmlFor="password">Contraseña</label>
            <input type="password" title="password" value={this.state.password} onChange={this.onChangePassword} />
          </div>
  
          <br />
  
          <div className="fieldGroup">
            <label htmlFor="birthDate">Fecha de Nacimiento</label>
            <input type="date" title="birthDate" value={this.state.birthdate} onChange={this.onChangeBirthdate} />
          </div>
  
          <div className="fieldGroup">
            <label htmlFor="idDocNumber">Numero de Documento ID</label>
            <input type="number" title="idDocNumber" value={this.state.idNumber} onChange={this.onChangeIdNumber} />
          </div>
  
          <div className="fieldGroup">
            <label htmlFor="idDocDate">Fecha de Expedicion Documento ID</label>
            <input type="date" title="idDocDate" value={this.state.idDate} onChange={this.onChangeIdDate} />
          </div>

          <div className="fieldGroup">  
          <label htmlFor="idDocType">Tipo de Documento:</label>
          <select title="idDocType" value={this.state.idType} onChange={this.onChangeIdType} >
            <option>Tarjeta de Indentidad</option>
            <option>Cedula de Ciudadanía</option>
            <option>Cedula de Extranjería</option>
          </select>
          </div>
          
          <br />
  
          <button className="main">Crear Usuario</button>
          
      </form>
    )
  }
}

export default SignUpForm;
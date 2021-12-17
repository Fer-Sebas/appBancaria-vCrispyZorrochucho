import React from 'react'
import axios from 'axios'

class SendMoneyForm extends React.Component {

  constructor (props) {
    super (props)

    this.onChangeTarget = this.onChangeTarget.bind(this)
    this.onChangeAmount = this.onChangeAmount.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {        
      senderAccountNumber: 10000000,
      targetAccountNumber: '',
      moneyAmmount: 0
    }

  }

  onChangeTarget (e) { this.setState({ targetAccountNumber: e.target.value }) }
  onChangeAmount (e) { this.setState({ moneyAmmount: e.target.value }) }

  onSubmit (e) {

    e.preventDefault()

    const transaction = {
      from: this.state.senderAccountNumber,
      to: this.state.targetAccountNumber,
      amount: this.state.moneyAmmount
    }

    axios
    .post('http://localhost:5000/transactions', transaction).then(({data}) => { console.log(data) }).catch(err => { console.error(err) })

    this.setState ({
      targetAccountNumber: 0,
      moneyAmmount: 0
    })

  }

  render() { 
    return (
      <form name="AddMoneyForm" id="AddMoneyForm" onSubmit={this.onSubmit}>
        <div className="fieldGroup">
          <label htmlFor="targetAccountNumber">El dinero se enviará a:</label>
          <input type="number" title="targetAccountNumber" min="10000000" value={this.state.targetAccountNumber} onChange={this.onChangeTarget} />
        </div>  
        <div className="fieldGroup">
          <label htmlFor="moneyAmount">Monto a enviar</label>
          <input type="number" title="moneyAmount" min="100" value={this.state.moneyAmmount} onChange={this.onChangeAmount} />
        </div>          
        <br />  
        <button className="main">Enviar</button> 
      </form>
    )
  }
}
 
export default SendMoneyForm

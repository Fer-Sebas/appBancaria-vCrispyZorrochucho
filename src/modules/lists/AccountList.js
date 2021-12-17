import React from 'react'
import axios from 'axios'
import AccountCard from '../cards/AccountCard'
import Card from '../cards/Card'
import { Button } from '../Buttons'

class AccountList extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            accounts: []
        }
    }
    
    componentDidMount () {
        axios.get(`http://localhost:5000/users/${this.props.user._id}/accounts`)
        .then(({data}) => { this.setState({ accounts: data }) }).catch(err => { console.error(err) })
    }

    handleRequestAccount () { 
        axios.post(`http://localhost:5000/users/${this.props.user._id}/accounts`)
        .then(response => {
            axios.get(`http://localhost:5000/users/${this.props.user._id}/accounts`)
            .then(({data}) => { this.setState({ accounts: data }) }).catch(err => { console.error(err) })
        })
        console.log('Cuenta Solicitada') 
    }

    render () {

        return(
            <>
                <Button label="Solicitar Cuenta" onClick={() => this.handleRequestAccount()} />
                { this.state.accounts.length === 0 && 
                    <Card title="Hola!" body="Aun no tienes cuentas. Solicta una haciendo click en el boton de arriba." />
                } 
                { this.state.accounts.length > 0 && this.state.accounts.map ( account => { 
                    return <AccountCard key={account.number} number={account.number} balance={account.balance} status={account.status} /> 
                } ) }
            </>
        )
    }
    
    
}

export default AccountList
import React from 'react'
import { ButtonIcon } from '../Buttons'
import { IconCancel } from '../Icons'
import { formatAccountNumber, currencyFormatter } from '../helpers'
import axios from 'axios'

class AccountCard extends React.Component {

    handleUpdateStatus (account) {
        axios.post(`http://localhost:5000/accounts/`, { number: account.number, status: 'CANCELED' })
        console.log(`Cuenta ${formatAccountNumber(account.number)} cancelada`) 
    }

    render() { 

        if (this.props.status === 'ACTIVE') {

            return (
                <>
                <div className="card">
                <div>
                    <div>
                        <h4># {formatAccountNumber(this.props.number)}</h4>  
                        <p>{currencyFormatter.format(this.props.balance)}</p>                        
                        <p className='positive'>Activa</p>
                    </div>
                    <nav>
                        <ButtonIcon handle={() => this.handleUpdateStatus(this.props)}> <IconCancel/> </ButtonIcon>
                    </nav>
                </div>
                </div>
                </>
            )

        }

        else if (this.props.status === 'CANCELED') {

            return (
                <>
                <div className="card canceled">
                <div>
                    <div>
                        <h4># {formatAccountNumber(this.props.number)}</h4>  
                        <p>{currencyFormatter.format(this.props.balance)}</p>                        
                        <p className='negative'>Cancelada</p>
                    </div>
                    <nav>
                        <ButtonIcon /> 
                    </nav>
                </div>
                </div>
                </>
            )

        }

        else if (this.props.status === 'PENDING') {

            return (
                <>
                <div className="card locked">
                <div>
                    <div>
                        <h4># {formatAccountNumber(this.props.number)}</h4>  
                        <p>{currencyFormatter.format(this.props.balance)}</p>                        
                        <p>Pendiente</p>
                    </div>
                    <nav>
                        <ButtonIcon /> 
                    </nav>
                </div>
                </div>
                </>
            )

        }

    }
}
 
export default AccountCard;
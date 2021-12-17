import React from 'react'
import dateFormat from "dateformat"
import { ButtonIcon } from '../Buttons'
import { IconAlert } from '../Icons'
import { formatAccountNumber, currencyFormatter } from '../helpers'
const format = 'dd mmm yyyy hh:MM TT'

class TransactionCard extends React.Component {
    render() {

        if ( this.props.from.id === this.props.userId && this.props.to.id === this.props.userId ) {
            return (
                <>
                <div className="card"> 
                    <div>
                        <div>
                            <h4>{dateFormat(this.props.date, format)}</h4> 
                            <p>{formatAccountNumber(this.props.from.accountNumber)}  »  {formatAccountNumber(this.props.to.accountNumber)}</p>
                            <p>{currencyFormatter.format(this.props.amount)}</p>     
                        </div>
                        <nav> <ButtonIcon> <IconAlert /> </ButtonIcon> </nav>
                    </div>                     
                </div>
                </>
            )
        }

        else if ( this.props.from.id === this.props.userId ) {
            return (
                <>
                <div className="card"> 
                    <div>
                        <div>
                            <h4>{dateFormat(this.props.date, format)}</h4> 
                            <p className='negative'>{this.props.to.accountOwner}  »  {formatAccountNumber(this.props.to.accountNumber)}</p>
                            <p className='negative'>{currencyFormatter.format(this.props.amount)}</p>     
                        </div>
                        <nav> <ButtonIcon> <IconAlert /> </ButtonIcon> </nav>
                    </div>                     
                </div>
                </>
            )
        }

        else if ( this.props.to.id === this.props.userId ) {
            return (
                <>
                <div className="card"> 
                    <div>
                        <div>
                            <h4>{dateFormat(this.props.date, format)}</h4> 
                            <p className='positive'>{this.props.from.accountOwner}  »  {formatAccountNumber(this.props.to.accountNumber)}</p>
                            <p className='positive'>{currencyFormatter.format(this.props.amount)}</p>
                        </div>
                        <nav> <ButtonIcon> <IconAlert /> </ButtonIcon> </nav>
                    </div>                     
                </div>
                </>
            )
        }
    }
}

export default TransactionCard
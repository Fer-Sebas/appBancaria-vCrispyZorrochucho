import React from 'react'
import axios from 'axios'
import Card from '../cards/Card'
import {DialogCard} from '../Cards'
import { ButtonIcon } from '../Buttons'
import { IconCheck, IconCancel } from '../Icons'
import { formatAccountNumber } from '../helpers'

class ProductList extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            productList: []
        }
    }

    componentDidMount () {
        axios.get(`http://localhost:5000/accounts`)
        .then(({data}) => { this.setState({ productList: data }) }).catch(err => { console.error(err) })
    }

    handleUpdateStatus (result) { 
        if (result.status === 'ACTIVE') {
            axios.post(`http://localhost:5000/accounts/`, { number: result.number, status: 'CANCELED' })
            console.log(`Producto ${formatAccountNumber(result.number)} cancelado`) 
        } 
        else if (result.status === 'CANCELED') {
            axios.post(`http://localhost:5000/accounts/`, { number: result.number, status: 'ACTIVE' })
            console.log(`Producto ${formatAccountNumber(result.number)} activado`) 
        }
    }

    render() { 

        const filter = this.state.productList.filter( product => product.status === 'ACTIVE' || product.status === 'CANCELED' )

        if (filter.length > 0) {
            return (
                filter.map ( result => { return (
                    <Card key={result._id}>
                        <div>
                            <div>
                                <h4>{result.owner.name}</h4>
                                <p>{formatAccountNumber(result.number)}</p>
                                {result.status === 'ACTIVE' && <p className='positive'>Activa</p>}
                                {result.status === 'CANCELED' && <p className='negative'>Cancelada</p>}
                            </div>
                            <nav>
                                { result.status === 'ACTIVE' && <ButtonIcon handle={() => this.handleUpdateStatus(result)}> <IconCancel/> </ButtonIcon> }
                                { result.status === 'CANCELED' && <ButtonIcon handle={() => this.handleUpdateStatus(result)}> <IconCheck/> </ButtonIcon> }
                            </nav>
                        </div> 
                    </Card>
                )})
            )
        }
    
        else {
            return (
                <DialogCard title="Esta muy solo aqui." body="Aun no existen productos que administrar." />
            )
        }  
    }
            
}

export default ProductList;
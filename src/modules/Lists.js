import { RequestCard, DialogCard } from "./Cards"
import Card from "./cards/Card"
import TransactionCard from "./cards/TransactionCard"
import { useEffect, useState } from 'react'
import axios from 'axios'

function RequestList () {

    const [requestList, setRequestList] = useState([])
    const fetchAccountRequests = async () => {
        return axios.get(`http://localhost:5000/accounts`)
        .then(({data}) => { return data }).catch(err => { console.error(err) })
    }

    useEffect(() => { fetchAccountRequests().then(requestList => { setRequestList(requestList) }) }, [])

    const filter = requestList.filter( request => request.status === 'PENDING')

    if (filter.length > 0) {
        return (
            filter.map ( result => { return <RequestCard key={result._id} number={result.number} owner={result.owner.name} /> })
        )
    }

    else {
        return (
            <DialogCard title="No hay solicitudes pendientes" body="Las solicitudes de cuentas apareceran aqui." />
        )
    }    

}

function MovementList ({user}) {
    
    const [transactions, setTransactions] = useState([])
    
    const fetchUserTransactions = async () => {
        return axios.get(`http://localhost:5000/transactions/${user._id}`)
        .then(({data}) => { return data }).catch(err => { console.error(err) })
    }

    useEffect(() => { fetchUserTransactions().then(transactions => { setTransactions(transactions) }) }, [])

    return (
        <>
        { transactions.length === 0 && <Card title="Aun no haz hecho ninguna transacción" body="Tus transacciones apareceran aqui." /> } 
        { transactions.length > 0 && 
            transactions.map ( transaction => { 
                return <TransactionCard key={transaction._id} date={transaction.date} from={transaction.from} to={transaction.to} amount={transaction.amount} userId={user._id} />  
            })
        }
        </>
    )
}

export { RequestList, MovementList }
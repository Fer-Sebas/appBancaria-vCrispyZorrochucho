import React from 'react'
import axios from 'axios'
import { IconPencil } from '../Icons'
import { ButtonIcon } from '../Buttons'
import Card from '../cards/Card'
import { formatAccountNumber } from '../helpers'

class ComplaintList extends React.Component {

    constructor (props) {
        super (props)
        this.state = {
            complaintList: []
        }
    }

    handleReplyComplaint (complaint) {
        
    }

    componentDidMount () {
        axios.get(`http://localhost:5000/transactions/complaints`)
        .then(({data}) => { this.setState({ complaintList: data }) }).catch(err => { console.error(err) })
    }

    render () {
        return (
            this.state.complaintList.map( complaint => {
                return (
                    <Card key={complaint._id}> 
                        <div className="header">
                            <div>
                                <h4>{complaint.complaint.startedBy.name}</h4>
                                <p>{formatAccountNumber(complaint.complaint.startedBy.account)}</p>
                            </div>
                            <nav className="buttonArray">
                                <ButtonIcon handle={() => this.handleReplyComplaint(complaint)}>
                                    <IconPencil/>
                                </ButtonIcon>                            
                            </nav>
                        </div>
                        <p>{complaint.complaint.description}</p>
                    </Card>
                )
            })
        )
    } 
}

export default ComplaintList
import React from 'react'
import Header from './modules/Header'
import { RequestList, MovementList } from './modules/Lists'
import ComplaintList from './modules/lists/ComplaintList'
import ProductList from './modules/lists/ProductList'
import AccountList from './modules/lists/AccountList'
import SendMoneyForm from './modules/SendMoney.Form'
import AddMoneyForm from './modules/AddMoneyForm'
import Footer from './modules/Footer'
import SignIn from './modules/SignIn'
import SignUp from './modules/SignUp'
import { ButtonNavbar } from './modules/Buttons'
import axios from 'axios'
import { DialogCard } from './modules/Cards'

const userId = 0  

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { view: 1, user: ''}
    this.handleViewChange = this.handleViewChange.bind(this)
  }

  handleViewChange(id){ this.setState({ view: id }) }

  componentDidMount() {
    axios.get(`http://localhost:5000/users/${userId}`)
    .then(({data}) => { console.log(`User logged in: ${data.username.first} ${data.username.last}`); this.setState({ user: data }) })
    .catch(err => { console.error(err) })
  }
  

  render() {

    if (this.state.user) {     
      return (  
        <>  
          <Header username={this.state.user.username} role={this.state.user.role} />  
          {this.state.user.role === 'USER' &&
            <>
              {this.state.view === 1 && <AccountList user={this.state.user} /> }
              {this.state.view === 2 && <MovementList user={this.state.user} /> }
              {this.state.view === 3 && 
                <DialogCard title="Envia dinero a otra cuenta" body="Indicanos el numero de cuenta y el monto que deseas enviar." altText="El costo de la transacción es del 1%" >
                  <SendMoneyForm accounts={this.state.user.accounts} />
                </DialogCard>
              }
              <Footer>          
                <ButtonNavbar label="Movimientos" navTo={() => this.handleViewChange(2)} />
                <ButtonNavbar label="Cuentas" navTo={() => this.handleViewChange(1)} />
                <ButtonNavbar label="Transacciones" navTo={() => this.handleViewChange(3)} />
              </Footer>
            </>
          }  
          {this.state.user.role === 'ADMIN' &&
            <>
              {this.state.view === 1 &&
                <DialogCard title="Consignar dinero" body="Indicanos el numero de cuenta y el monto que deseas consignar." >
                  <AddMoneyForm />
                </DialogCard>
              }
              {this.state.view === 2 && <RequestList /> }
              {this.state.view === 3 && <ProductList /> }
              {this.state.view === 4 && <ComplaintList /> }
              <Footer>          
                <ButtonNavbar label="Solicitudes" navTo={() => this.handleViewChange(2)} />
                <ButtonNavbar label="Productos" navTo={() => this.handleViewChange(3)} />
                <ButtonNavbar label="Reclamos" navTo={() => this.handleViewChange(4)} />
                <ButtonNavbar label="Consignar" navTo={() => this.handleViewChange(1)} />
              </Footer>
            </>
          }  
          {this.state.user.role === 'SUPERADMIN' &&
            <>
              {this.state.view === 1 &&
                <DialogCard title="Consignar dinero"  body="Indicanos el numero de cuenta y el monto que deseas consignar." >
                  <AddMoneyForm />
                </DialogCard>
              }
              {this.state.view === 2 && <RequestList /> }
              {this.state.view === 3 && <ProductList /> }
              {this.state.view === 4 && <ComplaintList /> }
              <Footer>          
                <ButtonNavbar label="Solicitudes" navTo={() => this.handleViewChange(2)} />
                <ButtonNavbar label="Productos" navTo={() => this.handleViewChange(3)} />
                <ButtonNavbar label="Reclamos" navTo={() => this.handleViewChange(4)} />
                <ButtonNavbar label="Funcionarios" navTo={() => this.handleViewChange(1)} />
              </Footer>
            </>
          }  
        </>      
      )
    }
  
    if (!this.state.user) {
      return (
        <>
          {this.state.view === 1 && <SignIn handleViewChange={this.handleViewChange.bind(this)} /> }
          {this.state.view === 2 && <SignUp handleViewChange={this.handleViewChange.bind(this)} /> }
        </>
      )
    }
  }

}

export default App;
import React from 'react'
import { ButtonAccount } from './Buttons'
import Divider from './Divider'

class Header extends React.Component {
    render() { 
        return (
            <header>
                <nav>
                    <div>           
                        {this.props.role === 'USER' && <h4>Hola</h4> }
                        {this.props.role === 'ADMIN' && <h4>Funcionario</h4> }
                        {this.props.role === 'SUPERADMIN' && <h4>Administrador</h4> }                           
                        <p>{this.props.username.first}</p>     
                    </div>                 
                    <ButtonAccount />
                </nav>
                <Divider />
            </header>
        )
    }
}
 
export default Header;
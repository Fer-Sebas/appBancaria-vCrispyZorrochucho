import React from 'react'

function ButtonAccount() {
    return(
        <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 0.5C6.048 0.5 0 6.548 0 14C0 21.452 6.048 27.5 13.5 27.5C20.952 27.5 27 21.452 27 14C27 6.548 20.952 0.5 13.5 0.5ZM13.5 4.55C15.741 4.55 17.55 6.359 17.55 8.6C17.55 10.841 15.741 12.65 13.5 12.65C11.259 12.65 9.45 10.841 9.45 8.6C9.45 6.359 11.259 4.55 13.5 4.55ZM5.4 19.373C7.1415 21.992 10.125 23.72 13.5 23.72C16.875 23.72 19.8585 21.992 21.6 19.373C21.5595 16.6865 16.1865 15.215 13.5 15.215C10.8 15.215 5.4405 16.6865 5.4 19.373Z" fill="#FFFFFE"/>
        </svg>
    )
}

class Button extends React.Component {
    render () { return <button onClick={this.props.onClick}>{this.props.label}</button> }
}

class ButtonNavbar extends React.Component {
    render() { return <li onClick={this.props.navTo}>{this.props.label}</li> }
}

class ButtonIcon extends React.Component {
    render() {
        return (
            <button className="icon" onClick={this.props.handle}>
                {this.props.children}
            </button>
        )
    }
}

export { ButtonAccount, ButtonNavbar, Button, ButtonIcon }
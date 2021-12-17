import React from 'react'

class Card extends React.Component {
    render() { 
        return (
            <div className="card">
                {this.props.title != null && 
                    <h3>{this.props.title}</h3>
                } 
                {this.props.body != null && 
                    <p>{this.props.body}</p>
                }
                {this.props.children}
            </div>
        )
    }
}

export default Card;
import React, { Component } from 'react';
import './style.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.callbackFromParent(this.props.value, this.props.type);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick} className={`button ${this.props.type}`} >{this.props.value}</button>
            </div>
        );
    }

}
export default Button;
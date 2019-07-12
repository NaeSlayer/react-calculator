import React, { Component } from 'react';
import './style.css';

class ResultArea extends Component {
    render() {
        return (
            <div className="display">
                <input value={this.props.value} />
            </div>
        );
    }
}
export default ResultArea;
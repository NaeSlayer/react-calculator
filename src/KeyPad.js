import React, { Component } from 'react';
import Button from './Button';
import './style.css';

export const keys = [
    [
        { value: "7", type: "number", },
        { value: "8", type: "number", },
        { value: "9", type: "number", },
        { value: "/", type: "operator", },
    ],
    [
        { value: "4", type: "number", },
        { value: "5", type: "number", },
        { value: "6", type: "number", },
        { value: "X", type: "operator", },
    ],
    [
        { value: "1", type: "number", },
        { value: "2", type: "number", },
        { value: "3", type: "number", },
        { value: "-", type: "operator", },
    ],
    [
        { value: ".", type: "decimal", },
        { value: "0", type: "number", },
        { value: "=", type: "=", },
        { value: "+", type: "operator", },
    ],
]

class KeyPad extends Component {
    constructor(props) {
        super(props);
        this.myCallback = this.myCallback.bind(this);
    }
    myCallback(value, type) {
        this.props.callbackFromParent(value, type);
    }
    render() {
        return (
            <div className="keypad">
                <table>
                    <tbody>
                        {keys.map(rows => {
                            return (
                                <tr>
                                    {rows.map(keyValue => {
                                        return <td><Button callbackFromParent={this.myCallback} value={keyValue.value} type={keyValue.type}></Button></td>
                                    })}
                                </tr>
                            )
                        })}
                        <tr><td><Button callbackFromParent={this.myCallback} value="C" type="clear" /></td></tr>
                    </tbody>
                </table>
            </div>

        );
    }
}
export default KeyPad;
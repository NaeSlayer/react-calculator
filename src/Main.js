import React, { Component } from 'react';
import Header from './Header';
import KeyPad from './KeyPad';
import Button from './Button';
import ResultArea from './ResultArea';
import Content from './Content';
import './style.css';

let num1Arr = [];
let num2Arr = [];
let setNum1 = true;
let num1Dec = false;
let num2Dec = false;
let operator = null;
let result = 0;
let num1;
let num2;
let displayArr = [];
let display = "0";
let validDecimal = true;
let extraOperator = false;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: display,
        };
        this.myCallback = this.myCallback.bind(this);
        this.clear = this.clear.bind(this);
        this.setValues = this.setValues.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);
        this.calculate = this.calculate.bind(this);
    }
    myCallback(value, type) {
        this.setValues(value, type);
    }
    updateDisplay(value) {
        displayArr.push(value);
        display = displayArr.join('');
        this.setState({ displayValue: display });
    }
    clear() {
        num1Arr = [];
        num2Arr = [];
        setNum1 = true;
        num1Dec = true;
        num2Dec = true;
        operator = null;
        result = 0;
        num1 = 0;
        num2 = 0;
        displayArr = [];
        display = "0";
        validDecimal = true;
        let extraOperator = false;
        this.setState({ displayValue: result });
    }
    setValues(value, type) {
        switch (type) {
            case 'operator':
                return this.setOperator(value);
            case 'number':
                return this.setOperands(value);
            case 'decimal':
                return this.handleDecimal(value);
            case '=':
                return this.calculate();
            case 'clear':
                return this.clear();
        }
    }
    setOperator(value) {
        if (!setNum1 && operator != null) {
            operator = value;
            setNum1 = false;
            validDecimal = true;
            return this.calculate();
        } else {
            operator = value;
            setNum1 = false;
            validDecimal = true;
            this.updateDisplay(value);
        }
    }
    setOperands(value) {
        if (setNum1) {
            num1Arr.push(value);
            num1 = num1Arr.join('');
        } else if (!setNum1) {
            num2Arr.push(value);
            num2 = num2Arr.join('');
        }
        this.updateDisplay(value);
    }
    handleDecimal(value) {
        if (setNum1 && !num1Dec) {
            this.setOperands(value);
            num1Dec = true;
        } else if (!setNum1 && !num2Dec) {
            this.setOperands(value);
            num2Dec = true;
        } else {
            validDecimal = false;
        }
    }
    calculate() {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "X":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
        }
        result = result.toString();
        this.setState({ displayValue: result });
        extraOperator = true;
        displayArr.length = 0;
        num1 = result;
        num2Arr.length = 0;
        num2 = 0;
    }
    render() {
        return (
            <div className="outside">
                <Header />
                <ResultArea value={this.state.displayValue} />
                <KeyPad callbackFromParent={this.myCallback} />
                <Content />
            </div>
        );
    }
}
export default Main;
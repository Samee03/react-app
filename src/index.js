import React from 'react'
import ReactDOM from 'react-dom'

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {scale:'c', temp:0}
    }

    render() {
        const temp = this.state.temp
        const celsius = this.state.scale === 'f' ? convert(temp, toCelsius) : temp
        const fahrenheit = this.state.scale === 'c' ? convert(temp, toFahrenheit) : temp
        return (
            <div>
                <Inputs scalename={'Celsius'} value={celsius} func={this.handleCelsius} />
                <Inputs scalename={'Fahrenheit'} value={fahrenheit} func={this.handleFahrenheit}/>
            </div>
        )
    }

    handleCelsius = (e) => {
        this.setState({scale:'c', temp:e.target.value})
    }

    handleFahrenheit = (e) => {
        this.setState({scale:'f', temp:e.target.value})
    }
}

function convert(temp, convertFunction) {
    return convertFunction(temp);
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

class Inputs extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Scale {this.props.scalename}</legend>
                <input type={'text'} value={this.props.value} onChange={this.props.func}/>
            </fieldset>
        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);
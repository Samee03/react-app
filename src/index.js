import React from 'react'
import ReactDOM from 'react-dom'

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {scale:'c', temp:0}
    }

    render() {
        const temp = this.state.temp;
        const celsius = this.state.scale === 'f' ? (temp - 32) * 5 / 9 : temp;
        const fahrenheit = this.state.scale === 'c' ? (temp * 9 / 5) + 32 : temp;
        return (
            <div>
                <fieldset>
                    <legend>Scale Celsius</legend>
                    <input type={'text'} value={celsius} onChange={this.handleCelsius}/>
                </fieldset>
                <fieldset>
                    <legend>Scale Fahrenheit</legend>
                    <input type={'text'} value={fahrenheit} onChange={this.handleFahrenheit}/>
                </fieldset>
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

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);
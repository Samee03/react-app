import React from 'react'
import ReactDOM from 'react-dom'

class FormTest extends React.Component {
    constructor(props){
        super(props)
        this.state = {value: '', submit:'', checkbox: false, text:''}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submit: this.state.value + ' | ' + this.state.text + ' | ' + this.state.checkbox,
        })
    }

    handleInput = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheck = (e) => {
        this.setState({
            checkbox: !this.state.checkbox
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleInput}/><br/><br/>

                    <textarea name="text" id="text" cols="30" rows="10" value={this.state.text} onChange={this.handleText}/><br/>

                    <label htmlFor="">Checkbox
                        <input type="checkbox" value={this.state.checkbox} onChange={this.handleCheck}/>
                    </label><br/><br/>

                    <input type="submit" value={'Go Ahead'}/>
                </form>

                <h3>Value OnChangeInput = {this.state.value}</h3>
                <h3>Value OnChangeText = {this.state.text}</h3>
                <h3>Value OnChangeCheckbox = {this.state.checkbox.toString()}</h3>
                <h3>Value OnSubmit = {this.state.submit}</h3>
            </div>
        )
    }
}

ReactDOM.render(
    <FormTest/>,
    document.getElementById('root')
);
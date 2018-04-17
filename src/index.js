import React from 'react'
import ReactDOM from 'react-dom'

function Message(props) {
    if(props.value) {
        return <h1>I'm First Message!</h1>
    } else {
        return <h1>I'm Second Message!</h1>
    }
}

class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value : true}
    }

    handleEvent = () => {
        this.setState({
            value: !this.state.value
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.handleEvent}>Change Text</button>
                <Message value={this.state.value}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Btn />,
    document.getElementById('root')
);
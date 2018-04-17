import React from 'react'
import ReactDOM from 'react-dom'

function Cartoon(props) {
    return <h1>Cartoon name is {props.name} on {props.show}</h1>
}

function Show() {
    return <div>
        <Cartoon name={'Pikachu'} show={'Pokemon'}/>
        <Cartoon name={'Jasmine'} show={'Aladdin'}/>
    </div>
}

// class Cartoon extends React.Component {
//     render() {
//         return <h1>Cartoon name is {this.props.name}</h1>
//     }
// }

ReactDOM.render(
    <Show/>,
    document.getElementById('root')
);
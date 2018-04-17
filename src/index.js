import React from 'react'
import ReactDOM from 'react-dom'

function ToonsList(props) {
    const list = props.cartoons;
    // const toons = list.map((list, index) => <li key={index}>{list}</li>);

    return <ul>
        {list.map((list, index) => <li key={index}>{list}</li>)}
    </ul>
}
const cartoons = ['Pikacu', 'Aladdin', 'Tom', 'Tom'];

ReactDOM.render(
    <ToonsList cartoons={cartoons}/>,
    document.getElementById('root')
);
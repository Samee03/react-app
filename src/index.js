import React from 'react'
import ReactDOM from 'react-dom'

setInterval(function () {
    ReactDOM.render(
        <h2>Time Now:- {new Date().toLocaleTimeString()}</h2>,
        document.getElementById('root')
    );
});
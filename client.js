import 'babel-core/register';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

function run() {
    // Compare that virtual DOM with the actual DOM inside the <div id="app"> HTML element 
    // and will modify the actual DOM to make it match the virtual DOM exactly
    ReactDOM.hydrate(<App />, document.getElementById('app'));
}

// Ensures that React app is only mounted when the HTML page is fully loaded
const loadedStates = ['complete', 'loaded', 'interactive'];
if (loadedStates.includes(document.readyState) && document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}
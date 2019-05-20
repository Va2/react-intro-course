import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

import * as serviceWorker from './serviceWorker';

function MyApp() {
    return (
        <div>
            <h1>John Doe</h1>
            <p>Junior Web Developer</p>
            <ol>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>React Native</li>
            </ol>
        </div>
    )
}

ReactDOM.render(<MyApp />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

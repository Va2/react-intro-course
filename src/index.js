import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <ul>
        <li>ReactJS</li>
        <li>Redux</li>
        <li>React Native</li>
    </ul>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

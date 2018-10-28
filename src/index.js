import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'
// import {Routes} from './routes';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function getResumePath() {
//     if (['localhost', '127.0.0.1'].indexOf(window.location.hostname) === -1) {
//         return '/public/resume.json';
//     }
//     return '/public/resume.example.json';
// }

// function getNavigation() {
//     return {
//         home: 'Home',
//         about: 'About',
//         work: 'Work',
//         education: 'Education',
//         skill: 'Skills',
//         portfolio: 'Portfolio',
//         testimonials: 'References'
//     };
// }

// Routes.get({
//     resumePath: getResumePath(),
//     navigation: getNavigation()
// })

ReactDOM.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

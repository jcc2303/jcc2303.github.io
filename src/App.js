import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {Routes} from './routes';




// const ReactCSSTransitionGroup = require('react-addons-css-transition-group');
// import {TransitionGroup} from 'react-transition-group'
/* <TransitionGroup transitionName='appear' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
{React.cloneElement(this.props.children, {key: this.props.location.pathname})}
</TransitionGroup>     */


function getResumePath() {
  console.log(window.location.hostname)
  
    if (['localhost', '127.0.0.1'].indexOf(window.location.hostname) === -1) {
        return '/resume.json';
    }
    return '/public/resume.json';
}

function getNavigation() {
    return {
        home: 'Home',
        about: 'About',
        work: 'Work',
        education: 'Education',
        skill: 'Skills',
        portfolio: 'Portfolio',
        testimonials: 'References'
    };
}

let routes = Routes.get({
    resumePath: getResumePath(),
    navigation: getNavigation()
})

class App extends Component {
  render() {
    return (
      <div className='main-container'>
      {routes}        
    </div>
    );
  }
}


export default App;


// <div className="App">
//   <header className="App-header">
//   </header>
// </div>

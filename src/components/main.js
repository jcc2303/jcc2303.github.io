

import React from 'react';
// import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom'
import Home from './home'


// const ReactCSSTransitionGroup = require('react-addons-css-transition-group');
// import {TransitionGroup} from 'react-transition-group'
/* <TransitionGroup transitionName='appear' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
{React.cloneElement(this.props.children, {key: this.props.location.pathname})}
</TransitionGroup>     */

export default class Main extends React.Component {

    constructor(props){
        super(props)
        console.log(props);
    }
    render() {
      return (
        <div className='main-container'>
        <Switch>
            <Route exact path='/' component={Home}/>
            {/* both /roster and /roster/:number begin with /roster */}
            {/* <Route path='/roster' component={Roster}/>
            <Route path='/schedule' component={Schedule}/> */}
        </Switch>          
        </div>
      );
    }
}

  
// Main.propTypes = {
//     location: PropTypes.shape({
//         pathname: PropTypes.string.isRequired
//     }).isRequired
// }



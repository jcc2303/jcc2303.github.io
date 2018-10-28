
import React from 'react';
import {Router, Route} from 'react-router'; 

// import Main from './components/main';
import Home from './components/home';
import NotFound from './components/errors/not_found';




import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

export const Routes = {
    get: function (config) {
        return (
            <Router history={history}>
                <Route path='/' component={Home}/>
                <Route path='*' component={NotFound}/>
            </Router>
        );
    }
};

{/* <Route path='/' component={Main}>
<Route path='*' component={NotFound}/>
</Route> */}

//                     <IndexRoute config={config} component={Home}/>

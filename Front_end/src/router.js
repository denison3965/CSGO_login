import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from './pages/mainPage';
import RegisterPage from './pages/registerPage'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/register" component={RegisterPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
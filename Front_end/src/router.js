import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from './pages/mainPage';
import RegisterPage from './pages/registerPage'
<<<<<<< HEAD
import accessPage from './pages/accessPage'
=======
import ComponenteHome from './components/teste'
>>>>>>> 725277d1675fcdb450fd9ab132b4906934d93816

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/register" component={RegisterPage} />
<<<<<<< HEAD
                <Route path="/access" component={accessPage} />
=======
                <Route path="/home" component={ComponenteHome} />
>>>>>>> 725277d1675fcdb450fd9ab132b4906934d93816
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
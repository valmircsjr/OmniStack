import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import New from './pages/New';

// define as rotas e o switch faz com que cada rota seja
// executada de cada vez
// exact faz com que so chame a rota se for exatamente aquilo
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/" exact component={Login}/>
                <Route path="/new" component={New}/>
            </Switch>
        </BrowserRouter>
    )
}
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import App from './App';
import Form from './Component/Form/Form';

export default (
    <Switch>
        <Route exact path="/" component = {App}/>
        <Route path="/dashboard" component = {Dashboard}/>
        <Route path="/form" component = {Form}/>
    </Switch>
)
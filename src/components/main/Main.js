import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import Home from "../home/Home";
import Dashboard from "../dashboard/Dashboard";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/dashboard' component={Dashboard} />
                </Switch>
            </div>
        );
    }
}

export default Main;

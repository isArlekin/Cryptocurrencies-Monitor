import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import './main.sass'
import Dashboard from "../dashboard/Dashboard";
import HomeContainer from "../../containers/HomeContainer";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route exact path='/' component={HomeContainer} />
                    <Route path='/dashboard' component={Dashboard} />
                </Switch>
            </div>
        );
    }
}

export default Main;

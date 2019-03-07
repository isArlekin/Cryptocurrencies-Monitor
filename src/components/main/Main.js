import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import HomeContainer from "../../containers/HomeContainer";
import DashboardContainer from '../../containers/DashboardContainer';
import './main.sass'

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route exact path='/' component={HomeContainer} />
                    <Route path='/dashboard' component={DashboardContainer} />
                </Switch>
            </div>
        );
    }
}

export default Main;

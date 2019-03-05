import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import './main.sass'
import Dashboard from "../dashboard/Dashboard";
import HomeContainer from "../../containers/HomeContainer";
import {connect} from 'react-redux';
import { updateCryptocurrencies} from '../../actions/MainActions';

class Main extends Component {

    componentDidMount() {
        const params = {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
        };

        setInterval(() => {
            console.log('Update Cryptocurrencies');
            this.props.updateCryptocurrencies({ params });
        }, 60000);
    }

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

const mapStateToProps = srore => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        updateCryptocurrencies: (requestObj) => dispatch(updateCryptocurrencies(requestObj)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main);

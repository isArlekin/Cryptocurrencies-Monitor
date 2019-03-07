import React, { Component } from 'react';
import {connect} from "react-redux";
import {getCryptocurrencies} from '../actions/MainActions';
import Dashboard from '../components/dashboard/Dashboard';
import {addCurrencyToLocalStorage, removeCurrencyFromLocalStorage} from '../actions/LocalStorageActions';

class DashboardContainer extends Component {
    render() {
        const { page, savedCurrencies, saveCurrency, getCriptocurrencies, removeCurrency } = this.props;

        return (
            <Dashboard
                data={page.data}
                savedCurrencies={savedCurrencies}
                saveCurrency={saveCurrency}
                removeCurrency={removeCurrency}
                getCriptocurrencies={getCriptocurrencies}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        page: store.data,
        savedCurrencies: store.savedCurrencies,
    };
};

export default connect(
    mapStateToProps,
    {
        getCriptocurrencies: getCryptocurrencies,
        saveCurrency: addCurrencyToLocalStorage,
        removeCurrency: removeCurrencyFromLocalStorage,
    },
)(DashboardContainer);

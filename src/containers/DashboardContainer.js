import React, { Component } from 'react';
import {connect} from "react-redux";
import {getFilteredCryptocurrencies} from '../actions/MainActions';
import Dashboard from '../components/dashboard/Dashboard';
import {addCurrencyToLocalStorage, removeCurrencyFromLocalStorage} from '../actions/LocalStorageActions';
import {startSavedDataUpdating, stopSavedDataUpdating} from '../actions/SavedCurrenciesDataUpdatingAction';

class DashboardContainer extends Component {

    componentDidMount() {
        this.props.startDataUpdating();
        this.props.getFilteredCryptocurrencies();
    }

    componentWillUnmount() {
        this.props.stopDataUpdating();
    }

    render() {
        const {
            page,
            saveCurrency,
            removeCurrency,
            getFilteredCryptocurrencies,
        } = this.props;

        return (
            <Dashboard
                getFilteredCryptocurrencies={getFilteredCryptocurrencies}
                filteredData={page.data}
                isFetching={page.isFetching}
                saveCurrency={saveCurrency}
                removeCurrency={removeCurrency}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        page: store.filteredData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        startDataUpdating: () => dispatch(startSavedDataUpdating),
        stopDataUpdating: () => dispatch(stopSavedDataUpdating),
        getFilteredCryptocurrencies: (params) => dispatch(getFilteredCryptocurrencies(params)),
        saveCurrency: id => dispatch(addCurrencyToLocalStorage(id)),
        removeCurrency: id => dispatch(removeCurrencyFromLocalStorage(id)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DashboardContainer);

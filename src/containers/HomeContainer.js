import React, { Component } from 'react';
import {connect} from "react-redux";
import Home from "../components/home/Home";
import {getCryptocurrencies} from "../actions/MainActions";
import {
    startTopListDataUpdating,
    stopTopListDataUpdating
} from '../actions/TopListDataUpdatingActions';

class HomeContainer extends Component {

    componentDidMount() {
        this.props.startDataUpdating();
    }

    componentWillUnmount() {
        this.props.stopDataUpdating();
    }

    render() {
        const { page, getCryptocurrencies } = this.props;

        return (
            <Home
                data={page.data}
                isFetching={page.isFetching}
                getCryptocurrencies={getCryptocurrencies}
                error={page.error}
            />
        )
    }
}

const mapStateToProps = srore => {
    return {
        page: srore.topListData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        startDataUpdating: () => dispatch(startTopListDataUpdating),
        stopDataUpdating: () => dispatch(stopTopListDataUpdating),
        getCryptocurrencies: requestObj => dispatch(getCryptocurrencies(requestObj)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeContainer)

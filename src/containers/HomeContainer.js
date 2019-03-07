import React, { Component } from 'react';
import {connect} from "react-redux";
import Home from "../components/home/Home";
import {getCryptocurrencies} from "../actions/MainActions";

class HomeContainer extends Component{
    render() {
        const { page, getCriptocurrencies } = this.props;
        
        console.log(this.props);

        return (
            <Home
                data={page.data}
                isFetching={page.isFetching}
                getCriptocurrencies={getCriptocurrencies}
                error={page.error}
            />
        )
    }
}

const mapStateToProps = srore => {
    return {
        page: srore.data,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCriptocurrencies: (requestObj) => dispatch(getCryptocurrencies(requestObj)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeContainer)

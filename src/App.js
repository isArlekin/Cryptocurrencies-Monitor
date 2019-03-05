import React, { Component } from 'react';

import './App.sass';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {connect} from 'react-redux';
import {startDataUpdating} from './actions/DataUpdatingAction';
import PropTypes from 'prop-types';

class App extends Component {

    componentDidMount() {
        this.props.startDataUpdating();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
            </div>
        );
  }
}

App.propTypes = {
    startDataUpdating: PropTypes.func.isRequired,
};

const mapStateToProps = srore => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        startDataUpdating: () => dispatch(startDataUpdating),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

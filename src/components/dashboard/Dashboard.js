import React, { Component } from 'react';

import './dashboard.sass'
import CurrencySelector from '../currency-selector/CurrencySelector';
import axios from 'axios';
import {CURRENCY, INITIAL_DATA_ORDER} from '../../core/constants';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API}/coins/markets`, {
            params: {
                vs_currency: CURRENCY,
                order: INITIAL_DATA_ORDER,
                per_page: 10,
                page: 1,
                sparkline: false,
            },
        })
            .then(res => {
                this.setState({
                    data: res.data.map(item => ({
                        name: item.name,
                        value: item.id,
                    })),
                })
            })
    }

    onSelectCurrency(selectedCurrency) {
        console.log(selectedCurrency);
    }

    render() {
        return (
            <div className="Dashboard">
                <h2 className="page-title">Dashboard</h2>

                <div className="page-content">
                    <CurrencySelector data={this.state.data}
                                      selectCurrency={this.onSelectCurrency}
                    />
                </div>
            </div>
        );
    }
}

export default Dashboard;

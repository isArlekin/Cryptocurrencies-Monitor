import React, { Component } from 'react';
import axios from 'axios';

import './home.sass';
import CurrencyTable from "../currency-table/CurrencyTable";
import {Utils} from "../../core/utils";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            columns: [
                {
                    title: 'Name',
                    img: 'image',
                    field: 'name',
                    sortingEnabled: false,
                },
                {
                    title: 'Market Cap',
                    field: 'market_cap',
                    sortingEnabled: true,
                },
                {
                    title: 'Price',
                    field: 'current_price',
                    sortField: 'price',
                    sortingEnabled: true,
                },
                {
                    title: 'Volume (24h)',
                    field: 'total_volume',
                    sortField: 'volume',
                    sortingEnabled: true,
                }
            ],
            loading: true,
        };

    }

    buildRequestParams() {
        return {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
        }
    }

    componentDidMount() {
        const defaultRequestParams = this.buildRequestParams();
        this.requestData(defaultRequestParams);
    }

    requestData(params) {
        this.setState({ loading: true });
        axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params
        })
            .then(res => {
                const data = this.mapData(res.data);
                const loading = false;
                console.log(data);
                this.setState({ data, loading })
            });
    }

    mapData(data) {
        return data.map(item => {
            const market_cap = `$${Utils.formatCurrency(item.market_cap)}`;
            const current_price = `$${Utils.formatCurrency(item.current_price)}`;
            const total_volume = `$${Utils.formatCurrency(item.total_volume)}`;
            return Object.assign({}, item, { market_cap, current_price, total_volume });
        });
    }

    applySort(sortInfo) {
        const requestParams = this.buildRequestParams();

        console.log(sortInfo);
        requestParams.order = `${sortInfo.field}_${sortInfo.direction}`;

        this.requestData(requestParams);
    }

    render() {
        return (
            <div className="Home">
                <h2 className="page-title">Top 10</h2>
                <div className="page-content">
                    <CurrencyTable columns={this.state.columns}
                                   data={this.state.data}
                                   loading={this.state.loading}
                                   onSelectSort={(sortInfo) => this.applySort(sortInfo)}/>
                </div>
            </div>
        );
    }
}

export default Home;

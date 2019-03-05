import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './home.sass';
import CurrencyTable from "../currency-table/CurrencyTable";
import {Utils} from "../../core/utils";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            ]
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
        this.props.getCriptocurrencies({ params: defaultRequestParams });
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

        requestParams.order = `${sortInfo.field}_${sortInfo.direction}`;

        this.props.getCriptocurrencies({ params: requestParams });
    }

    render() {
        const data = this.mapData(this.props.data);
        console.log('Table rendering!');
        return (
            <div className="Home">
                <h2 className="page-title">Top 10</h2>
                <div className="page-content">
                    <CurrencyTable columns={this.state.columns}
                                   data={data}
                                   loading={this.props.isFetching}
                                   onSelectSort={(sortInfo) => this.applySort(sortInfo)}/>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    getCriptocurrencies: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default Home;

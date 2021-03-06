import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './home.sass';
import CurrencyTable from "../currency-table/CurrencyTable";
import {Utils} from "../../core/utils";
import {CURRENCY, INITIAL_DATA_ORDER} from '../../core/constants';

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
            vs_currency: CURRENCY,
            order: INITIAL_DATA_ORDER,
            per_page: 10,
            page: 1,
        }
    }

    componentDidMount() {
        this.props.getCryptocurrencies({ params: this.buildRequestParams() });
    }

    mapData(data) {
        return data.map(item => {
            const market_cap = `$${Utils.formatCurrency(item.market_cap)}`;
            const current_price = `$${Utils.formatCurrency(item.current_price)}`;
            const total_volume = `$${Utils.formatCurrency(item.total_volume)}`;
            return Object.assign({}, item, { market_cap, current_price, total_volume });
        });
    }

    applySort = (sortInfo) => {
        const requestParams = this.buildRequestParams();

        requestParams.order = `${sortInfo.field}_${sortInfo.direction}`;

        this.props.getCryptocurrencies({ params: requestParams });
    };

    render() {
        const data = this.mapData(this.props.data);
        return (
            <div className="Home">
                <h2 className="page-title">Top 10</h2>
                <div className="page-content">
                    <CurrencyTable columns={this.state.columns}
                                   data={data}
                                   loading={this.props.isFetching}
                                   onSelectSort={this.applySort}/>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    error: PropTypes.string,
    getCryptocurrencies: PropTypes.func.isRequired,
};

export default Home;

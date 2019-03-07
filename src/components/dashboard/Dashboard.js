import React, { Component } from 'react';

import './dashboard.sass'
import CurrencySelector from '../currency-selector/CurrencySelector';
import {CURRENCY, INITIAL_DATA_ORDER} from '../../core/constants';
import CurrencyTable from '../currency-table/CurrencyTable';

class Dashboard extends Component {
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
                },
                {
                    title: 'Controls',
                    field: '',
                    controls: true,
                    sortingEnabled: false,
                }
            ],
        };
    }

    componentDidMount() {
        this.props.getCriptocurrencies({
            params: {
                vs_currency: CURRENCY,
                order: INITIAL_DATA_ORDER,
                per_page: 200,
                page: 1,
                sparkline: false,
            },
        });
    }

    onSelectCurrency = (selectedItem) => {
        this.props.saveCurrency(selectedItem.value);
    };

    applySort = () => {

    };

    deleteItem = (item) => {
        this.props.removeCurrency(item.id);
    };

    mapDataForSelect(data) {
        return data.map(item => ({
            name: item.name,
            value: item.id,
        }));
    }

    filterDataBySelectedIds(data, selectedIds) {
        return data.filter(currency => selectedIds.findIndex(id => id === currency.id) > -1);
    }

    render() {
        const { data, savedCurrencies } = this.props;
        const preparedData = this.mapDataForSelect(data);
        const selectedData = this.filterDataBySelectedIds(data, savedCurrencies);

        return (
            <div className="Dashboard">
                <h2 className="page-title">Dashboard</h2>

                <div className="page-content">
                    <div className="row">
                        <CurrencySelector data={preparedData}
                                          selectCurrency={this.onSelectCurrency}
                        />
                    </div>

                    <div className="row">
                        <CurrencyTable columns={this.state.columns}
                                       data={selectedData}
                                       onSelectSort={this.applySort}
                                       onDeleteItem={this.deleteItem}
                        />
                    </div>
                </div>
            </div>
        );
    }
}



export default Dashboard;

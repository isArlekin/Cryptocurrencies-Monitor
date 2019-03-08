import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './dashboard.sass'
import CurrencySelector from '../currency-selector/CurrencySelector';
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

    onSelectCurrency = (selectedItem) => {
        this.props.saveCurrency(selectedItem.value);
    };

    applySort = (sortInfo) => {
        const requestParams = {
            order: `${sortInfo.field}_${sortInfo.direction}`
        };

        this.props.getFilteredCryptocurrencies(requestParams);
    };

    deleteItem = (item) => {
        this.props.removeCurrency(item.id);
    };

    render() {
        const { filteredData, isFetching } = this.props;

        return (
            <div className="Dashboard">
                <h2 className="page-title">Dashboard</h2>

                <div className="page-content">
                    <div className="row">
                        <CurrencySelector selectCurrency={this.onSelectCurrency}
                        />
                    </div>

                    <div className="row">
                        <CurrencyTable columns={this.state.columns}
                                       data={filteredData}
                                       loading={isFetching}
                                       onSelectSort={this.applySort}
                                       onDeleteItem={this.deleteItem}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    filteredData: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    getFilteredCryptocurrencies: PropTypes.func.isRequired,
    saveCurrency: PropTypes.func.isRequired,
    removeCurrency: PropTypes.func.isRequired,
};

export default Dashboard;

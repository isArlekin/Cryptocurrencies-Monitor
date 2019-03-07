import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './currency-table.sass';
import spinner from '../../images/spinner.gif';
import TableHeader from "./table-header/TableHeader";
import TableRow from "./table-row/TableRow";
import {columnInterface} from './CurrencyTable.interface';

class CurrencyTable extends Component {
    renderRows() {
        const data = this.props.data;

        return data.map((row, index) => {
            return <TableRow key={row.id}
                             columns={this.props.columns}
                             data={row}
                             rowIndex={index + 1}
                             deleteItem={() => this.props.onDeleteItem(row)}
            />
        });
    }

    render() {
        return (
            <div className="CurrencyTable">
                <TableHeader columns={this.props.columns} onSelectSort={(e) => this.props.onSelectSort(e)}/>
                <div className="table-body">
                    { this.renderRows() }
                </div>
                { this.props.loading && <div className="overlay">
                    <img src={spinner} alt="Loading" className="spinner"/>
                </div>}
            </div>
        );
    }
}

CurrencyTable.propTypes = {
    columns: PropTypes.arrayOf(columnInterface).isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    onSelectSort: PropTypes.func,
    onDeleteItem: PropTypes.func,
};

CurrencyTable.defaultProps = {
    data: [],
    loading: false,
};

export default CurrencyTable;

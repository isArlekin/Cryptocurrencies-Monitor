import React, { Component } from 'react';

import './currency-table.sass';
import spinner from '../../images/spinner.gif';
import TableHeader from "./table-header/TableHeader";
import TableRow from "./table-row/TableRow";

class CurrencyTable extends Component {
    renderRows() {
        const data = this.props.data || [];

        return data.map((row, index) => {
            return <TableRow key={row.id} columns={this.props.columns} data={row} rowIndex={index + 1}/>
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
                    <img src={spinner} className="spinner"/>
                </div>}
            </div>
        );
    }
}

export default CurrencyTable;

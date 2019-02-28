import React, { Component } from 'react';

import sortIcon from '../../../images/sort-down.svg';
import './table-header.sass';

class TableHeader extends Component {
    constructor(props) {
        super(props);
        let columns = props.columns || [];

        columns = columns.map(col => {
            return Object.assign({}, col, {
                isActive: false,
                sortApplied: false
            });
        });

        this.state = { columns };
    }

    applySort(colIndex) {
        const columns = this.state.columns;
        const selectedCol = columns[colIndex];

        columns.forEach((col, i) => {
            if (i !== colIndex) {
                col.isActive = false;
                col.sortApplied = false;
            }
        });

        selectedCol.sortApplied = true;
        selectedCol.isActive = !selectedCol.isActive;

        this.setState({ columns });
        this.props.onSelectSort({
            field: selectedCol.sortField || selectedCol.field,
            direction: selectedCol.isActive ? 'desc' : 'asc',
        });
    }

    render() {
        const columns = this.state.columns.map((col, i) => {
            const isActive = col.isActive ? '-active' : '';
            return <div key={i} onClick={() => this.applySort(i)} className={`col ${isActive}`}>
                    <div className="name">{col.title}</div>
                    {col.sortingEnabled && col.sortApplied && <img className="sort-icon" src={sortIcon}/>}
                </div>
        });
        return (
            <div className="TableHeader">
                <div className="col">
                    <div className="name">#</div>
                </div>
                { columns }
            </div>
        );
    }
}

export default TableHeader;

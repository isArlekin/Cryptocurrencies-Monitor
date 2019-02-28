import React from 'react';
import './table-row.sass';

export default function TableRow(props) {
    const columns = props.columns.map(columnInfo =>
        <div key={columnInfo.field} className="cel">{props.data[columnInfo.field]}</div>
    );

    return (
        <div className="TableRow">
            <div className="cel">{ props.rowIndex }</div>
            { columns }
        </div>
    );
}

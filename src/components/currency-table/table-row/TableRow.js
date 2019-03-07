import React from 'react';
import './table-row.sass';
import deleteIcon from '../../../images/delete.svg';

export default function TableRow({ columns, data, rowIndex, deleteItem }) {
    const columnsLayout = columns.map(columnInfo => {
        if (columnInfo.controls) {
            return <div key={columnInfo.field} className="cel">
                <button type="button"
                        onClick={deleteItem}
                        className="delete-btn">
                    <img src={deleteIcon} alt="Delete"/>
                </button>
            </div>
        }
        return <div key={columnInfo.field} className="cel">{data[columnInfo.field]}</div>;
    });

    return (
        <div className="TableRow">
            <div className="cel">{ rowIndex }</div>
            { columnsLayout }
        </div>
    );
}

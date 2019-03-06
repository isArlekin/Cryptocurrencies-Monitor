import React from 'react';
import down from '../../../images/down.svg';

function CurrencySelectorHeader(props) {
    const selectedItem = props.selectedItem || null;
    return (
        <div onClick={props.toggle}
             className="currency-selector-header">
            <div className="currency-selector-header__content">
                {!selectedItem && <div className="currency-selector-header__placeholder">Select Option</div>}
                {selectedItem && <div className="currency-selector-header__value">{ selectedItem.name }</div>}
            </div>
            <img className="currency-selector-header__icon" src={down} alt="Down icon of selector component"/>
        </div>
    );
}

export default CurrencySelectorHeader;

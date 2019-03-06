import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside'
import './currency-selector.sass';
import CurrencySelectorHeader from './currency-selector-header/CurrencySelectorHeader';
import classNames from  'classnames';

class CurrencySelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            selectedItem: null
        };
    }

    handleClickOutside() {
        if (this.state.isOpened) {
            this.setState({ isOpened: false });
        }
    }

    toggle(e) {
        this.setState({
            isOpened: !this.state.isOpened,
        })
    }

    selectItem(selectedItem) {
        this.props.selectCurrency(selectedItem);
        this.setState({ selectedItem });
        this.toggle();
    }

    preventClick(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    renderItems(data) {
        return data.map(item => {
            return <div onClick={() => this.selectItem(item)}
                        key={item.value}
                        className="currency-selector-list__item">
                { item.name }
            </div>
        });
    }

    render() {
        const items = this.renderItems(this.props.data);
        const isDataToDisplaying = !!this.props.data;
        return (
            <div onClick={e => this.preventClick(e)} className={classNames('currency-selector', { '-active': this.state.isOpened })}>
                <CurrencySelectorHeader
                    selectedItem={this.state.selectedItem}
                    toggle={e => this.toggle(e)}
                />
                <div className="currency-selector-list">
                    { !isDataToDisplaying && <div className="currency-selector__no-data">No data to display</div> }
                    { isDataToDisplaying && items }
                </div>
            </div>
        );
    }
}

export default enhanceWithClickOutside(CurrencySelector);

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import enhanceWithClickOutside from 'react-click-outside'
import './currency-selector.sass';
import CurrencySelectorHeader from './currency-selector-header/CurrencySelectorHeader';
import classNames from  'classnames';
import {connect} from 'react-redux';
import {CURRENCY, INITIAL_DATA_ORDER} from '../../core/constants';
import {getCryptocurrenciesList} from '../../actions/SelectCurrenciesComponentActions';

class CurrencySelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            selectedItem: null
        };
    }

    componentDidMount() {
        this.props.getCryptocurrenciesList({
            params: {
                vs_currency: CURRENCY,
                order: INITIAL_DATA_ORDER,
                per_page: 200,
                page: 1,
                sparkline: false,
            }
        });
    }

    handleClickOutside() {
        if (this.state.isOpened) {
            this.setState({ isOpened: false });
        }
    }

    toggle = () => {
        this.setState({
            isOpened: !this.state.isOpened,
        })
    };

    selectItem (selectedItem) {
        this.props.selectCurrency(selectedItem);
        this.setState({ selectedItem });
        this.toggle();
    };

    preventClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
    };

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
            <div onClick={this.preventClick} className={classNames('currency-selector', { '-active': this.state.isOpened })}>
                <CurrencySelectorHeader
                    selectedItem={this.state.selectedItem}
                    toggle={this.toggle}
                />
                <div className="currency-selector-list">
                    { !isDataToDisplaying && <div className="currency-selector__no-data">No data to display</div> }
                    { isDataToDisplaying && items }
                </div>
            </div>
        );
    }
}

const itemInterface = PropTypes.shape({
    name: PropTypes.string.required,
    value: PropTypes.string.required,
});

CurrencySelector.propTypes = {
    data: PropTypes.arrayOf(itemInterface).isRequired,
    selectCurrency: PropTypes.func.isRequired,
};

CurrencySelector.defaultProps = {
    data: [],
};

const mapStateToProps = store => {
    return {
        data: store.selectComponent.data,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCryptocurrenciesList: requestObj => dispatch(getCryptocurrenciesList(requestObj)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(enhanceWithClickOutside(CurrencySelector));

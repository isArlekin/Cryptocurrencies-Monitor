import {getFilteredCryptocurrencies} from './MainActions';

export const ADD_CURRENCY_TO_LOCAL_STORAGE = 'ADD_CURRENCY_TO_LOCAL_STORAGE';
export const REMOVE_CURRENCY_FROM_LOCAL_STORAGE = 'REMOVE_CURRENCY_FROM_LOCAL_STORAGE';

export function addCurrencyToLocalStorage(currencyId) {
    return dispatch => {
        dispatch({
            type: ADD_CURRENCY_TO_LOCAL_STORAGE,
            payload: currencyId,
        });

        return dispatch(getFilteredCryptocurrencies());
    };
}

export function removeCurrencyFromLocalStorage(currencyId) {
    return dispatch => {
        dispatch({
            type: REMOVE_CURRENCY_FROM_LOCAL_STORAGE,
            payload: currencyId,
        });

        return dispatch(getFilteredCryptocurrencies());
    };
}

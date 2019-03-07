export const ADD_CURRENCY_TO_LOCAL_STORAGE = 'ADD_CURRENCY_TO_LOCAL_STORAGE';
export const REMOVE_CURRENCY_FROM_LOCAL_STORAGE = 'REMOVE_CURRENCY_FROM_LOCAL_STORAGE';

export function addCurrencyToLocalStorage(currencyId) {
    return {
        type: ADD_CURRENCY_TO_LOCAL_STORAGE,
        payload: currencyId,
    }
}

export function removeCurrencyFromLocalStorage(currencyId) {
    return {
        type: REMOVE_CURRENCY_FROM_LOCAL_STORAGE,
        payload: currencyId,
    }
}

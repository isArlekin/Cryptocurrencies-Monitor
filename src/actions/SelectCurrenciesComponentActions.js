import {
    requestCryptocurrencies
} from './MainActions';

export const GET_CRYPTOCURRENCIES_LIST_REQUEST = 'GET_CRYPTOCURRENCIES_LIST_REQUEST';
export const GET_CRYPTOCURRENCIES_LIST_SUCCESS = 'GET_CRYPTOCURRENCIES_LIST_SUCCESS';
export const GET_CRYPTOCURRENCIES_LIST_FAIL = 'GET_CRYPTOCURRENCIES_LIST_FAIL';

export function getCryptocurrenciesList(requestObj) {
    return dispatch => {

        dispatch({
            type: GET_CRYPTOCURRENCIES_LIST_REQUEST,
            payload: requestObj
        });

        return requestCryptocurrencies(requestObj)
            .then(res => {
                dispatch({
                    type: GET_CRYPTOCURRENCIES_LIST_SUCCESS,
                    payload: res.data,
                });
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: GET_CRYPTOCURRENCIES_LIST_FAIL,
                    payload: error,
                });
            });
    };
}

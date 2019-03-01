import axios from "axios";

export const GET_CRYPTOCURRENCIES_REQUEST = 'GET_CRYPTOCURRENCIES_REQUEST';
export const GET_CRYPTOCURRENCIES_SUCCESS = 'GET_CRYPTOCURRENCIES_SUCCESS';
export const GET_CRYPTOCURRENCIES_FAIL = 'GET_CRYPTOCURRENCIES_FAIL';

export function getCryptocurrencies(requestObj) {
    return dispatch => {
        dispatch({
            type: GET_CRYPTOCURRENCIES_REQUEST,
            payload: requestObj,
        });

        requestCryptocurrencies(requestObj, dispatch);
    }
}

function requestCryptocurrencies(requestObj, dispatch) {
    axios.get('https://api.coingecko.com/api/v3/coins/markets', requestObj)
        .then(res => {
            dispatch({
                type: GET_CRYPTOCURRENCIES_SUCCESS,
                payload: res.data,
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: GET_CRYPTOCURRENCIES_FAIL,
                payload: error,
            });
        });
}

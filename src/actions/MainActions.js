import axios from 'axios';
import {CURRENCY, INITIAL_DATA_ORDER} from '../core/constants';

export const GET_CRYPTOCURRENCIES_REQUEST = 'GET_CRYPTOCURRENCIES_REQUEST';
export const GET_CRYPTOCURRENCIES_SUCCESS = 'GET_CRYPTOCURRENCIES_SUCCESS';
export const GET_CRYPTOCURRENCIES_FAIL = 'GET_CRYPTOCURRENCIES_FAIL';

export const GET_CRYPTOCURRENCIES_BY_IDS_REQUEST = 'GET_CRYPTOCURRENCIES_BY_IDS_REQUEST';
export const GET_CRYPTOCURRENCIES_BY_IDS_SUCCESS = 'GET_CRYPTOCURRENCIES_BY_IDS_SUCCESS';
export const GET_CRYPTOCURRENCIES_BY_IDS_FAIL = 'GET_CRYPTOCURRENCIES_BY_IDS_FAIL';

export function getCryptocurrencies(requestObj) {
    return dispatch => {
        dispatch({
            type: GET_CRYPTOCURRENCIES_REQUEST,
            payload: requestObj,
        });

        return requestCryptocurrencies(requestObj)
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
}

export function getFilteredCryptocurrencies(params) {
    return (dispatch, getState) => {
        const savedCryptocurrencies = getState().savedCurrencies;
        const requestObj = {
            params: {
                vs_currency: CURRENCY,
                order: params && params.order ? params.order :INITIAL_DATA_ORDER,
                per_page: savedCryptocurrencies.length,
                page: 1,
                sparkline: false,
                ids: savedCryptocurrencies.join(',')
            }
        };

        dispatch({
            type: GET_CRYPTOCURRENCIES_BY_IDS_REQUEST,
            payload: requestObj,
        });

        return requestCryptocurrencies(requestObj)
            .then(res => {
                dispatch({
                    type: GET_CRYPTOCURRENCIES_BY_IDS_SUCCESS,
                    payload: res.data,
                });
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: GET_CRYPTOCURRENCIES_BY_IDS_FAIL,
                    payload: error,
                });
            });
    }
}

export function requestCryptocurrencies(requestObj) {
    return axios.get(`${process.env.REACT_APP_API}/coins/markets`, requestObj);
}

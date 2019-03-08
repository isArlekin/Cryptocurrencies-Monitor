import {DATA_UPDATING_DELAY} from '../core/constants';
import axios from 'axios';
import {requestCryptocurrencies} from './MainActions';

export const START_TOP_LIST_DATA_UPDATING = 'START_TOP_LIST_DATA_UPDATING';
export const STOP_TOP_LIST_DATA_UPDATING = 'STOP_TOP_LIST_DATA_UPDATING';

export const UPDATE_CRYPTOCURRENCIES_REQUEST = 'UPDATE_CRYPTOCURRENCIES_REQUEST';
export const UPDATE_CRYPTOCURRENCIES_SUCCESS = 'UPDATE_CRYPTOCURRENCIES_SUCCESS';
export const UPDATE_CRYPTOCURRENCIES_FAIL = 'UPDATE_CRYPTOCURRENCIES_FAIL';

export function updateCryptocurrencies(requestObj) {
    return dispatch => {
        dispatch({
            type: UPDATE_CRYPTOCURRENCIES_REQUEST,
            payload: requestObj,
        });

        return requestCryptocurrencies(requestObj)
            .then(res => {
                dispatch({
                    type: UPDATE_CRYPTOCURRENCIES_SUCCESS,
                    payload: res.data,
                });
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: UPDATE_CRYPTOCURRENCIES_FAIL,
                    payload: error,
                });
            });
    }
}

export function startTopListDataUpdating(dispatch, getState) {
    const intervalId = setInterval(() => {
        dispatch(updateCryptocurrencies(getState().topListData.requestObj));
    }, DATA_UPDATING_DELAY);


    dispatch({
        type: START_TOP_LIST_DATA_UPDATING,
        payload: intervalId,
    });
}

export function stopTopListDataUpdating(dispatch, getState) {
    clearInterval(getState().topListData.intervalId);

    dispatch({
        type: STOP_TOP_LIST_DATA_UPDATING,
        payload: null,
    });
}

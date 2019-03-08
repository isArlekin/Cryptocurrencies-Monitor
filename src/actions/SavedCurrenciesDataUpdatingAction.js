import {DATA_UPDATING_DELAY} from '../core/constants';
import axios from 'axios';

export const UPDATE_SAVED_CRYPTOCURRENCIES_REQUEST = 'UPDATE_SAVED_CRYPTOCURRENCIES_REQUEST';
export const UPDATE_SAVED_CRYPTOCURRENCIES_SUCCESS = 'UPDATE_SAVED_CRYPTOCURRENCIES_SUCCESS';
export const UPDATE_SAVED_CRYPTOCURRENCIES_FAIL = 'UPDATE_SAVED_CRYPTOCURRENCIES_FAIL';

export const START_SAVED_DATA_UPDATING = 'START_SAVED_DATA_UPDATING';
export const STOP_SAVED_DATA_UPDATING = 'STOP_SAVED_DATA_UPDATING';

export function updateCryptocurrencies(requestObj) {
    return dispatch => {
        dispatch({
            type: UPDATE_SAVED_CRYPTOCURRENCIES_REQUEST,
            payload: requestObj,
        });

        return axios.get(`${process.env.REACT_APP_API}/coins/markets`, requestObj)
            .then(res => {
                dispatch({
                    type: UPDATE_SAVED_CRYPTOCURRENCIES_SUCCESS,
                    payload: res.data,
                });
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: UPDATE_SAVED_CRYPTOCURRENCIES_FAIL,
                    payload: error,
                });
            });
    }
}

export function startSavedDataUpdating(dispatch, getState) {
    const intervalId = setInterval(() => {
        dispatch(updateCryptocurrencies(getState().filteredData.requestObj));
    }, DATA_UPDATING_DELAY);


    dispatch({
        type: START_SAVED_DATA_UPDATING,
        payload: intervalId,
    });
}

export function stopSavedDataUpdating(dispatch, getState) {
    clearInterval(getState().filteredData.intervalId);

    dispatch({
        type: STOP_SAVED_DATA_UPDATING,
        payload: null,
    });
}

import axios from "axios";

export const GET_CRYPTOCURRENCIES_REQUEST = 'GET_CRYPTOCURRENCIES_REQUEST';
export const GET_CRYPTOCURRENCIES_SUCCESS = 'GET_CRYPTOCURRENCIES_SUCCESS';
export const GET_CRYPTOCURRENCIES_FAIL = 'GET_CRYPTOCURRENCIES_FAIL';

export const UPDATE_CRYPTOCURRENCIES_REQUEST = 'UPDATE_CRYPTOCURRENCIES_REQUEST';
export const UPDATE_CRYPTOCURRENCIES_SUCCESS = 'UPDATE_CRYPTOCURRENCIES_SUCCESS';
export const UPDATE_CRYPTOCURRENCIES_FAIL = 'UPDATE_CRYPTOCURRENCIES_FAIL';

export function getCryptocurrencies(requestObj) {
    return dispatch => {
        dispatch({
            type: GET_CRYPTOCURRENCIES_REQUEST,
            payload: requestObj,
        });

        return requestCryptocurrencies(requestObj, dispatch);
    }
}

export function updateCryptocurrencies(requestObj) {
    return dispatch => {
        dispatch({
            type: UPDATE_CRYPTOCURRENCIES_REQUEST,
            payload: requestObj,
        });

        return axios.get(`${process.env.REACT_APP_API}/coins/markets`, requestObj)
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

function requestCryptocurrencies(requestObj, dispatch) {
    return axios.get(`${process.env.REACT_APP_API}/coins/markets`, requestObj)
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

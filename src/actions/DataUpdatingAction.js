import {DATA_UPDATING_DELAY} from '../core/constants';
import {updateCryptocurrencies} from './MainActions';

export const START_DATA_UPDATING = 'START_DATA_UPDATING';
export const STOP_DATA_UPDATING = 'STOP_DATA_UPDATING';

export function startDataUpdating(dispatch, getState) {
    const intervalId = setInterval(() => {
        dispatch(updateCryptocurrencies(getState().data.requestObj));
    }, DATA_UPDATING_DELAY);


    dispatch({
        type: START_DATA_UPDATING,
        payload: intervalId,
    });
}

export function stopDataUpdating(intervalId) {
    return dispatch => {
        clearInterval(intervalId);

        dispatch({
            type: STOP_DATA_UPDATING,
            payload: null,
        });
    }
}

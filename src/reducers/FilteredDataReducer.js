import {
    GET_CRYPTOCURRENCIES_BY_IDS_FAIL,
    GET_CRYPTOCURRENCIES_BY_IDS_REQUEST,
    GET_CRYPTOCURRENCIES_BY_IDS_SUCCESS
} from '../actions/MainActions';
import {CURRENCY, INITIAL_DATA_ORDER} from '../core/constants';
import {
    START_SAVED_DATA_UPDATING,
    STOP_SAVED_DATA_UPDATING,
    UPDATE_SAVED_CRYPTOCURRENCIES_REQUEST, UPDATE_SAVED_CRYPTOCURRENCIES_SUCCESS
} from '../actions/SavedCurrenciesDataUpdatingAction';

const initialState = {
    data: [],
    requestObj: {
        params: {
            ids: [],
            vs_currency: CURRENCY,
            order: INITIAL_DATA_ORDER,
            per_page: 10,
            page: 1,
            sparkline: false,
        }
    },
    isFetching: false,
    intervalId: null,
    error: '',
};

export function filteredDataReducer(state = initialState, action) {
    switch (action.type) {
        case START_SAVED_DATA_UPDATING:
        case STOP_SAVED_DATA_UPDATING:
            return { ...state, intervalId: action.payload };

        case GET_CRYPTOCURRENCIES_BY_IDS_REQUEST:
            return { ...state, requestObj: action.payload, isFetching: true };

        case GET_CRYPTOCURRENCIES_BY_IDS_SUCCESS:
            return { ...state, data: action.payload, isFetching: false };

        case GET_CRYPTOCURRENCIES_BY_IDS_FAIL:
            return { ...state, isFetching: false, error: action.payload };

        case UPDATE_SAVED_CRYPTOCURRENCIES_REQUEST:
            return { ...state, requestObj: action.payload };

        case UPDATE_SAVED_CRYPTOCURRENCIES_SUCCESS:
            return { ...state, data: action.payload };

        default:
            return state;
    }
}

import {
    GET_CRYPTOCURRENCIES_FAIL,
    GET_CRYPTOCURRENCIES_REQUEST,
    GET_CRYPTOCURRENCIES_SUCCESS} from '../actions/MainActions';
import {
    START_TOP_LIST_DATA_UPDATING,
    STOP_TOP_LIST_DATA_UPDATING,
    UPDATE_CRYPTOCURRENCIES_REQUEST,
    UPDATE_CRYPTOCURRENCIES_SUCCESS
} from '../actions/TopListDataUpdatingActions';
import {CURRENCY, INITIAL_DATA_ORDER} from '../core/constants';

const initialState = {
    data: [],
    requestObj: {
        params: {
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

export function topListDataReducer(state = initialState, action) {
    switch (action.type) {
        case START_TOP_LIST_DATA_UPDATING:
        case STOP_TOP_LIST_DATA_UPDATING:
            return { ...state, intervalId: action.payload };

        case UPDATE_CRYPTOCURRENCIES_REQUEST:
            return { ...state, requestObj: action.payload };

        case UPDATE_CRYPTOCURRENCIES_SUCCESS:
            return { ...state, data: action.payload };

        case GET_CRYPTOCURRENCIES_REQUEST:
            return { ...state, requestObj: action.payload, isFetching: true, error: '' };

        case GET_CRYPTOCURRENCIES_SUCCESS:
            return { ...state, data: action.payload, isFetching: false, error: '' };

        case GET_CRYPTOCURRENCIES_FAIL:
            return { ...state, error: action.payload.message, isFetching: false };

        default:
            return state
    }
}

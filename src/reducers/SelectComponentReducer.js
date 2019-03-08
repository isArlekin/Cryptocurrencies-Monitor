import {CURRENCY, INITIAL_DATA_ORDER} from '../core/constants';
import {
    GET_CRYPTOCURRENCIES_LIST_FAIL,
    GET_CRYPTOCURRENCIES_LIST_REQUEST,
    GET_CRYPTOCURRENCIES_LIST_SUCCESS
} from '../actions/SelectCurrenciesComponentActions';

const initialState = {
    data: [],
    requestObj: {
        params: {
            vs_currency: CURRENCY,
            order: INITIAL_DATA_ORDER,
            per_page: 200,
            page: 1,
            sparkline: false,
        }
    },
    error: '',
};

export function selectComponentReducer(state = initialState, action) {
    switch (action.type) {

        case GET_CRYPTOCURRENCIES_LIST_REQUEST:
            return { ...state, requestObj: action.payload };

        case GET_CRYPTOCURRENCIES_LIST_SUCCESS:
            return { ...state, data: mapData(action.payload)};

        case GET_CRYPTOCURRENCIES_LIST_FAIL:
            return { ...state, error: action.payload };

        default:
            return state;
    }
}

function mapData(data) {
    return data.map(item => ({
        name: item.name,
        value: item.id,
    }));
}

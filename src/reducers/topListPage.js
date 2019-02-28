import {
    GET_CRYPTOCURRENCIES_FAIL,
    GET_CRYPTOCURRENCIES_REQUEST,
    GET_CRYPTOCURRENCIES_SUCCESS
} from "../actions/MainActions";

const initialState = {
    data: [],
    isFetching: false,
    error: '',
};

export function topListPage(state = initialState, action) {
    switch (action.type) {
        case GET_CRYPTOCURRENCIES_REQUEST:
            return { ...state, data: action.payload, isFetching: true, error: '' };

        case GET_CRYPTOCURRENCIES_SUCCESS:
            return { ...state, data: action.payload, isFetching: false, error: '' };

        case GET_CRYPTOCURRENCIES_FAIL:
            return { ...state, error: action.payload.message, isFetching: false };

        default:
            return state
    }
}

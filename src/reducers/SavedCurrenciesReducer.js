import {ADD_CURRENCY_TO_LOCAL_STORAGE, REMOVE_CURRENCY_FROM_LOCAL_STORAGE} from '../actions/LocalStorageActions';

const initialState = [];

export function savedCurrenciesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CURRENCY_TO_LOCAL_STORAGE:
            const newId = state.indexOf(action.payload) === -1;

            if (newId) {
                return [...state, action.payload];
            } else {
                return state;
            }

        case REMOVE_CURRENCY_FROM_LOCAL_STORAGE:
            return state.filter(id => id !== action.payload);

        default:
            return state
    }
}

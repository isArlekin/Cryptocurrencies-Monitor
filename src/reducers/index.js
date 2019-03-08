import {combineReducers} from "redux";
import {topListDataReducer} from "./TopListDataReducer";
import { connectRouter } from 'connected-react-router';
import {savedCurrenciesReducer} from './SavedCurrenciesReducer';
import {filteredDataReducer} from './FilteredDataReducer';
import {selectComponentReducer} from './SelectComponentReducer';

export const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    topListData: topListDataReducer,
    selectComponent: selectComponentReducer,
    savedCurrencies: savedCurrenciesReducer,
    filteredData: filteredDataReducer,
});

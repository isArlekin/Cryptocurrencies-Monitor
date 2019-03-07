import {combineReducers} from "redux";
import {dataReducer} from "./DataReducer";
import { connectRouter } from 'connected-react-router';
import {savedCurrenciesReducer} from './SavedCurrenciesReducer';

export const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    data: dataReducer,
    savedCurrencies: savedCurrenciesReducer,
});

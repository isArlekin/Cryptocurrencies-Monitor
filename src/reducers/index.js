import {combineReducers} from "redux";
import {topListPageReducer} from "./topListPage";
import { connectRouter } from 'connected-react-router';

export const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    topListPage: topListPageReducer,
});

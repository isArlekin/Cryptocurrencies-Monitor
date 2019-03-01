import {combineReducers} from "redux";
import {topListPage} from "./topListPage";
import { connectRouter } from 'connected-react-router';

export const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    topListPage: topListPage,
});

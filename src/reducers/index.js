import {combineReducers} from "redux";
import {topListPage} from "./topListPage";

export const rootReducer = combineReducers({
    topListPage: topListPage,
});

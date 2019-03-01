import {applyMiddleware, compose, createStore} from "redux";
import {createRootReducer} from "../reducers";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from "redux-thunk";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    return createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
            ),
        ),
    )
}

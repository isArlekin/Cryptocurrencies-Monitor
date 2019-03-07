import {applyMiddleware, compose, createStore} from "redux";
import {createRootReducer} from "../reducers";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from "redux-thunk";
import {loadState, saveState} from '../core/localStorage';

export const history = createBrowserHistory();

export default function configureStore() {
    const persistedState = loadState();
    const store = createStore(
        createRootReducer(history),
        persistedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
            ),
        ),
    );

    store.subscribe(() => {
        console.log("Saving store - ", store.getState());
        saveState({
            savedCurrencies: store.getState().savedCurrencies,
        });
    });

    return store;
}

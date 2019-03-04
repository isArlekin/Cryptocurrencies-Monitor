import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import './index.css';
import App from './App';
import configureStore, { history } from './store/configureStore'
import {BrowserRouter} from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
);

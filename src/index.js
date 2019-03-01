import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import './index.css';
import App from './App';
import configureStore, { history } from './store/configureStore'

const store = configureStore();

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>
    </HashRouter>,
    document.getElementById('root'),
);

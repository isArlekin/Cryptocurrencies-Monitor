import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import {BrowserRouter} from 'react-router-dom';
import {history} from '../../store/configureStore';
import App from '../../App';

const Root = ({ store }) => (
    <BrowserRouter>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>
    </BrowserRouter>
);

export default Root;

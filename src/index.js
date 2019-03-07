import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/configureStore';
import Root from './components/root/Root';

const store = configureStore();

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root'),
);

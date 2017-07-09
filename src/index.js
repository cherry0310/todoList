import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import todoReducer from './reducers/TodoReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {createLogger} from 'redux-logger';

let loggerMiddleware = createLogger();

let store = createStore(
    todoReducer,
    applyMiddleware(loggerMiddleware)
);


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

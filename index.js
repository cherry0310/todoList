import 'babel-polyfill';
import React from 'react';
import { render } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/todoApp';
import App from './components/App';

let store = createStore(todoApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

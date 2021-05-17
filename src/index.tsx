import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
    <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </>,
    document.getElementById('root')
);
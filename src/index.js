import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        {/*HashRouter for github pages / BrowserRouter*/}
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
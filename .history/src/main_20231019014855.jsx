import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { worker } from './mocks/browser';

import App from "./App/App";
import store from "./App/store";

import "normalize.css";
import "./index.scss";

if(import.meta.env.DEV) {
    worker.start();
}

ReactDOM.createRoot(
    document.getElementById("root")
).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
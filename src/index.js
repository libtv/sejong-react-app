import React from "react";
import ReactDOM from "react-dom";
import "./css/reset.css";
import "./css/code.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import reducer from "./modules/reducerIndex";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";

const myReducer = reducer();
const store = createStore(myReducer, applyMiddleware(ReduxThunk, logger));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

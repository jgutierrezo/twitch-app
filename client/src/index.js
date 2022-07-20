import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reduxThunk from "redux-thunk";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import reducers from "./components/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider
    store={createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))}
  >
    <App />
  </Provider>,
  document.querySelector("#root")
);

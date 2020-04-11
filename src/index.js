import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import actionCable from "actioncable";
// import { ActionCableProvider } from "react-actioncable-provider";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { API_WS_ROOT } from "./constants";

const CableApp = {};

CableApp.cable = actionCable.createConsumer(API_WS_ROOT);

ReactDOM.render(
  <Router>
    <App cableApp={CableApp} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

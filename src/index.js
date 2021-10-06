//redux thunk.
//you will find that increament operation takes a bit more time while decrement
//operation takes normal time

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

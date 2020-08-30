import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./components/App";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
// console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

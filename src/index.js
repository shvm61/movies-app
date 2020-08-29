import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./components/App";
import { createStore } from "redux";
import movies from "./reducers";

const store = createStore(movies);
// console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

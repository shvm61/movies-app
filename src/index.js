import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log("Action_Type=", action.type);
//       next(action);
//     };
//   };
// };

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log("Action_Type=", action.type);
  next(action);
};
const store = createStore(rootReducer, applyMiddleware(logger));
// console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

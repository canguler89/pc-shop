import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import reducer from "./reducers/reducer"
import { createStore } from "redux";

const store = createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

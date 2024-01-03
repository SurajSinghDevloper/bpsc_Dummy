import React, { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux'
import store from './Store';
import { BrowserRouter as Router } from 'react-router-dom';
import "./Index.css"

window.store = store;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </Provider>
);
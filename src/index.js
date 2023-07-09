import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./_store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/styles.scss";
import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextProvider from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

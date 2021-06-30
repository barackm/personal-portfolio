import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import ReactGA from "react-ga";

const TRACKING_ID = process.env.REACT_APP_GOOGLE_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop>
        <App />
      </ScrollTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

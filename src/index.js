import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free";
// import Counter from "./components/counter";
// import Counters from "./components/counters";
import * as serviceWorker from "./serviceWorker";
import MyPdf from "./pdf/myPdf";

ReactDOM.render(
  <BrowserRouter>
    {/* <Counter /> */}
    {/* <Counters /> */}
    {/* <App /> */}
    <MyPdf />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

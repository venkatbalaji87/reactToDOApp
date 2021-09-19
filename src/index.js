import "./styles.css";

import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
//index.html id from app
const $appRoot = document.querySelector("#app");

//app function in App.js
ReactDom.render(<App />, $appRoot);

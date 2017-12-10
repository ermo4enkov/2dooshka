import * as React from "react";
import * as ReactDOM from "react-dom";

import "./assets/scss/styles.scss";
// import "../node_modules/source-sans-pro/source-sans-pro.css";

import { Storybook } from "./components/storybook";

ReactDOM.render(
    <Storybook/>,
    document.getElementById("example")
);

import * as React from "react";
import * as ReactDOM from "react-dom";

import "./assets/scss/styles.scss";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { StoryBook } from "./views/storyBookView/storybook";
import { Main } from "./blocks/main/main";

ReactDOM.render(
    <MuiThemeProvider>
        <Main/>
    </MuiThemeProvider>,
    document.getElementById("example")
);

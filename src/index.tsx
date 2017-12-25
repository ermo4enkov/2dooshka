import * as React from "react";
import * as ReactDOM from "react-dom";

import "./assets/scss/styles.scss";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { StoryBook} from "./views/storybook/storybook";

ReactDOM.render(
    <MuiThemeProvider>
        <StoryBook/>
    </MuiThemeProvider>,
    document.getElementById("example")
);

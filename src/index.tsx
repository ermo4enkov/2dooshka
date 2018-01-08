import * as React from "react";
import * as ReactDOM from "react-dom";


import "./assets/scss/styles.scss";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import EveryDayView from "./views/everyDayView/everyDayView";
import StoryBook from "./views/storyBookView/storyBookView";
import TodayView from "./views/todayView/todayView";
import App from "./blocks/app/app";

import { Router, IndexRoute, browserHistory } from "react-router";

import { BrowserRouter , Route } from "react-router-dom";

ReactDOM.render(
    <MuiThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById("root")
);


{/* <div>
                <Route exact path="/" component={Main} />
                <Route path="everyday" component={EveryDayView} />
                <Route path="today" component={TodayView} />
            </div> */}
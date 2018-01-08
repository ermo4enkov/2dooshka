import * as React from "react";
import * as ReactDOM from "react-dom";


import "./assets/scss/styles.scss";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import EveryDayView from "./views/everyDayView/everyDayView";
import StoryBook from "./views/storyBookView/storyBookView";
import TodayView from "./views/todayView/todayView";
import Main from "./blocks/main/main";

import { Router, IndexRoute, browserHistory } from "react-router";

import { HashRouter, Route } from "react-router-dom";

ReactDOM.render(
    <MuiThemeProvider>
        <HashRouter>
            <div>
                <Route exact path="/" component={Main} />
                <Route path="everyday" component={EveryDayView} />
                <Route path="today" component={TodayView} />
            </div>
        </HashRouter>
        {/* <Router history={browserHistory}>
            <Route path="/" component={Main}/>
            <IndexRoute component={Main}/>
            <Route path="today" component={TodayView} />
            <Route path="everyday" component={EveryDayView} />
            <Route path="storybook" component={StoryBook} />
        </Router> */}
    </MuiThemeProvider>,
    document.getElementById("example")
);

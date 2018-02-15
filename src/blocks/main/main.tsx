import * as React from "react";
import { Switch, Route } from "react-router-dom";

import everyDayView from "../../views/everyDayView";
import todayView from "../../views/todayView";
import storyBookView from "../../views/storyBookView";


const Main = (props) => (
  <main>
    <Switch>
      <Route exact path="/" component={todayView}/>
      <Route path="/everyday" component={everyDayView}/>
      <Route path="/storybook" component={storyBookView}/>
    </Switch>
  </main>
)

export default Main;
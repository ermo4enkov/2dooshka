import * as React from "react";
import { Switch, Route } from "react-router-dom";

import EveryDayView from "../../views/everyDayView";
import TodayView from "../../views/todayView";
import StoryBookView from "../../views/storyBookView";


const Main = (props) => (
  <main>
    <Switch>
      <Route exact path="/today" render={ (routeProps) => 
        <TodayView routeProps={routeProps} {...props}/>
      }/>
      <Route exact path="/everyday" render={ (routeProps) => 
        <EveryDayView routeProps={routeProps} {...props}/>
      }/>

      <Route path="/storybook" component={StoryBookView}/>
    </Switch>
  </main>
);

export default Main;
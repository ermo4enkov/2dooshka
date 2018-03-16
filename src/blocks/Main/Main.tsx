import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import EveryDayView from '../.';
import TodayView from '../.';
import StoryBookView from '../.';

const appMain = props => (
  <main>
    <Switch>
      <Route
        exact
        path="/today"
        render={routeProps => <TodayView routeProps={routeProps} {...props} />}
      />
      <Route
        exact
        path="/everyday"
        render={routeProps => (
          <EveryDayView routeProps={routeProps} {...props} />
        )}
      />
      <Route
        path="/storybook"
        render={routeProps => (
          <StoryBookView routeProps={routeProps} {...props} />
        )}
      />
    </Switch>
  </main>
);

export default appMain;

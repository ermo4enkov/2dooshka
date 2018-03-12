import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import EveryDayView from '../../views/EveryDayView';
import TodayView from '../../views/TodayView';
import StoryBookView from '../../views/StoryBookView';

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

      <Route path="/storybook" component={StoryBookView} />
    </Switch>
  </main>
);

export default appMain;

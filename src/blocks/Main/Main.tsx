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
        component={TodayView}
      />
      <Route
        exact
        path="/everyday"
        component={EveryDayView}
      />
      <Route
        path="/storybook"
        component={StoryBookView}
      />
    </Switch>
  </main>
);

export default appMain;

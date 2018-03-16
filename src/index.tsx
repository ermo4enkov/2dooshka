import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './assets/scss/styles.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import EveryDayView from './views/EveryDayView/EveryDayView';
import StoryBookView from './views/StoryBookView/StoryBookView';
import TodayView from './views/TodayView/TodayView';
import App from './blocks/App/App';

import { Router, IndexRoute, browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './redux/store/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

import * as React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as styled from 'styled-components';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { addTask } from '../../redux/actions/addTask';
import { setTaskFinished } from '../../redux/actions/setTaskFinished';
import { getTaskList } from '../../redux/actions/getTaskList';

interface AppProps {
  data_user?: any;
  setTaskFinished?: any;
  addTask?: any;
  getTaskList?: any;
}

export class App extends React.Component<AppProps> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Main/>
      </div>
    );
  }
}

export default App;

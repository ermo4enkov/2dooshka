import * as React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as styled from 'styled-components';
import Header from '../header/Header';
import Main from '../main/Main';
import * as finishTask from '../../redux/actions/finishTask';
import * as addTask from '../../redux/actions/addTask';

interface AppProps {
  data_user?: any;
  finishTask?: any;
  addTask?: any;
}

export class App extends React.Component<AppProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const { data_user, finishTask, addTask } = this.props;

    return (
      <div>
        <Header />
        <Main data_user={data_user} finishTask={finishTask} addTask={addTask} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.error,
    login: state.login,
    user_type: state.user_type,
    fetching: state.fetching,
    data: state.data,
    data_user: state.data_user,
    succesVerifyCode: state.succesVerifyCode,
    type_of_input: state.type_of_input,
    checkTypeOfUser: state.checkTypeOfUser,
  };
}

function mapDispatchProps(dispatch: any) {
  return {
    finishTask: bindActionCreators(finishTask, dispatch),
    addTask: bindActionCreators(addTask, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchProps)(App));

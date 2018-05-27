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

  componentDidMount(){
    const getTask = this.props['getTaskList']
    getTask();
  }

  render() {
    const { data_user, setTaskFinished, addTask, getTaskList } = this.props;

    return (
      <div>
        <Header />
        <Main data_user={data_user} setTaskFinished={setTaskFinished} addTask={addTask} />
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
    setTaskFinished: bindActionCreators(setTaskFinished, dispatch),
    addTask: bindActionCreators(addTask, dispatch),
    getTaskList: bindActionCreators(getTaskList, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchProps)(App));

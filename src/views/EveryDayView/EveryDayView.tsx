import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../../redux/actions/addTask';
import { setTaskFinished } from '../../redux/actions/setTaskFinished';
import { getTaskList } from '../../redux/actions/getTaskList';
import TasksContainer from '../../blocks/TasksContainer';

export class EveryDayView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const getTask = this.props['getTaskList'];
    getTask('admin');
  }

  render() {
    const { everyday, completed, additionalTasks } = this.props['data_user'];
    const completedTasks = [...completed['everyday'], ...completed['today']];
    const setTaskFinished = this.props['setTaskFinished'];
    const addTask = this.props['addTask'];

    return (
      <div className="conteiner">
        <h1 className="title">Каждый день</h1>
        <TasksContainer
          everyDayTasks={everyday}
          setTaskFinished={setTaskFinished}
          completedTasks={completedTasks}
          addTask={addTask}
        />
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

export default connect(mapStateToProps, mapDispatchProps)(EveryDayView);

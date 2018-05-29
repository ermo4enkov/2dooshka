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
    const everyday = this.props['data_user']['tasks'] ? this.props['data_user']['tasks']['everyday']: null;
    const completed = this.props['data_user']['tasks'] ? this.props['data_user']['tasks']['completed']: null;
    const completedTasks = completed ? [...completed['everyday'], ...completed['today']] : [];
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
        fetching: state.fetching,
        data_user: state.data_user,
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

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
    const everydayTasks = this.props['everydayTasks'] ? this.props['everydayTasks'] : null;
    const completedTasks = this.props['completedEvery'] ? this.props['completedEvery'] : null;
    const setTaskFinished = this.props['setTaskFinished'];
    const addTask = this.props['addTask'];

    return (
      <div className="conteiner">
        <h1 className="title">Каждый день</h1>
        <TasksContainer
          everyDayTasks={everydayTasks}
          completedTasks={completedTasks}
          setTaskFinished={setTaskFinished}
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
        everydayTasks: state.everydayTasks,
        completedEvery: state.completedEvery
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
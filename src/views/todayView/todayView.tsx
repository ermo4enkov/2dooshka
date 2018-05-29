import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../../redux/actions/addTask';
import { setTaskFinished } from '../../redux/actions/setTaskFinished';
import { getTaskList } from '../../redux/actions/getTaskList';
import TasksContainer from '../../blocks/TasksContainer';
import Calendar from '../../blocks/Calendar';

export class TodayView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
     const getTask = this.props['getTaskList'];
     getTask('admin');
  }

  render() {
    const everydayTasks = this.props['everydayTasks'] ? this.props['everydayTasks'] : null;
    const completedEveryTasks = this.props['completedEvery'] ? this.props['completedEvery'] : null;
    const completedTodayTasks = this.props['completedToday'] ? this.props['completedToday'] : null;
    const todayTasks = this.props['todayTasks'] ? this.props['todayTasks'] : null;
    const days  = this.props['days'];
    const completedTasks = [...completedEveryTasks, ...completedTodayTasks];
    const setTaskFinished = this.props['setTaskFinished'];
    const addTask = this.props['addTask'];

    return (
      <div className="conteiner">
        <h1 className="title">Сегодня</h1>
        <TasksContainer
          everyDayTasks={everydayTasks}
          setTaskFinished={setTaskFinished}
          completedTasks={completedTasks}
          todayTasks={todayTasks}
          addTask={addTask}
          typeOfList="today"
        />
        <Calendar days={days} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        error: state.error,
        login: state.login,
        fetching: state.fetching,
        todayTasks: state.todayTasks,
        everydayTasks: state.everydayTasks,
        completedEvery: state.completedEvery,
        completedToday: state.completedToday,
        days: state.days
    };
}

function mapDispatchProps(dispatch: any) {
    return {
        setTaskFinished: bindActionCreators(setTaskFinished, dispatch),
        addTask: bindActionCreators(addTask, dispatch),
        getTaskList: bindActionCreators(getTaskList, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchProps)(TodayView);

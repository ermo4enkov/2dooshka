import * as React from 'react';
import TasksContainer from '../../blocks/TasksContainer';
import Calendar from '../../blocks/Calendar';

export class TodayView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { everyday, completed, today, days } = this.props['data_user'];

    const setTaskFinished = this.props['setTaskFinished'];
    const addTask = this.props['addTask'];

    return (
      <div className="conteiner">
        <h1 className="title">Сегодня</h1>
        <TasksContainer
          everyDayTasks={everyday}
          setTaskFinished={setTaskFinished}
          completedTasks={completed}
          todayTasks={today}
          addTask={addTask}
          typeOfList="today"
        />
        <Calendar days={days} />
      </div>
    );
  }
}

export default TodayView;

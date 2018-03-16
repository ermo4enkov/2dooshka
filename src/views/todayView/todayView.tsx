import * as React from 'react';
import TasksConteiner from '../../blocks/TasksContainer';
import Calendar from '../../blocks/Calendar';

export class TodayView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const everyDaytasks = this.props['data_user']['everydayTasks'];
    const completedTasks = this.props['data_user']['completedTasks'];
    const todayTasks = this.props['data_user']['todayTasks'];

    const setTaskFinished = this.props['setTaskFinished'];
    const addTask = this.props['addTask'];
    const days = this.props['data_user']['days'];

    return (
      <div className="conteiner">
        <h1 className="title">Сегодня</h1>
        <TasksConteiner
          everyDayTasks={everyDaytasks}
          setTaskFinished={setTaskFinished}
          completedTasks={completedTasks}
          todayTasks={todayTasks}
          addTask={addTask}
        />
        <Calendar days={days} />
      </div>
    );
  }
}

export default TodayView;

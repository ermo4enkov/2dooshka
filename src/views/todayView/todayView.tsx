import * as React from 'react';
import TasksConteiner from '../../blocks/tasksConteiner';
import Calendar from '../../blocks/calendar';

export class TodayView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const everyDaytasks = this.props['data_user']['everydayTasks'];
    const completedTasks = this.props['data_user']['completedTasks'];
    const todayTasks = this.props['data_user']['todayTasks'];

    const finishTask = this.props['finishTask'];
    const addTask = this.props['addTask'];
    const days = this.props['data_user']['days'];

    return (
      <div className="conteiner">
        <h1 className="title">Сегодня</h1>
        <TasksConteiner
          everyDayTasks={everyDaytasks}
          finishTask={finishTask}
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

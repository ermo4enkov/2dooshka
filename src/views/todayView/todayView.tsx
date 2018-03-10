import * as React from 'react';
import TasksConteiner from '../../blocks/TasksConteiner';
import Calendar from '../../blocks/Calendar';


export class TodayView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const everyDaytasks = this.props['data_user']['everyday_tasks'];
    const completedTasks = this.props['data_user']['completed_tasks'];
    const todayTasks = this.props['data_user']['today_tasks'];

    const finishTask = this.props['finishTask'];
    const addTask = this.props['addTask'];
    const days = this.props['data_user']['days'];

    return(
        <div className="conteiner">
            <h1 className="title">Сегодня</h1>
            <TasksConteiner 
              everyDayTasks={everyDaytasks} 
              finishTask={finishTask}
              completedTasks={completedTasks}
              todayTasks={todayTasks}
              addTask={addTask}
            />
            <Calendar days={days}/>
        </div>
    );
  }
}

export default TodayView;

import * as React from 'react';
import TasksConteiner from '../../blocks/TasksConteiner';

export class EveryDayView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const everyDayTasks = this.props['data_user']['everyday_tasks'];
    const completedTasks = this.props['data_user']['completed_tasks'];
    const additionalTasks = this.props['data_user']['additional_tasks'];
    const finishTask = this.props['finishTask'];

    return (
      <div className="conteiner">
        <h1 className="title">Каждый день</h1>
        <TasksConteiner
          everyDayTasks={everyDayTasks}
          finishTask={finishTask}
          completedTasks={completedTasks}
        />
      </div>
    );
  }
}

export default EveryDayView;

import * as React from 'react';
import TasksContainer from '../../blocks/TasksContainer';

export class EveryDayView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { everyday, completed } = this.props['data_user'];
    const additionalTasks = this.props['data_user']['additionalTasks'];
    const setTaskFinished = this.props['setTaskFinished'];
    const addTask = this.props['addTask'];

    return (
      <div className="conteiner">
        <h1 className="title">Каждый день</h1>
        <TasksContainer
          everyDayTasks={everyday}
          setTaskFinished={setTaskFinished}
          completedTasks={completed}
          addTask={addTask}
        />
      </div>
    );
  }
}

export default EveryDayView;

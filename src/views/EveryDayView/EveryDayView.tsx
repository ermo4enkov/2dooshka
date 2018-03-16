import * as React from 'react';
import TasksContainer from '../../blocks/TasksContainer';

export class EveryDayView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const everyDayTasks = this.props['data_user']['everydayTasks'];
    const completedTasks = this.props['data_user']['completedTasks'];
    const additionalTasks = this.props['data_user']['additionalTasks'];
    const setTaskFinished = this.props['setTaskFinished'];
    const addTask = this.props['addTask'];

    return (
      <div className="conteiner">
        <h1 className="title">Каждый день</h1>
        <TasksContainer
          everyDayTasks={everyDayTasks}
          setTaskFinished={setTaskFinished}
          completedTasks={completedTasks}
          addTask={addTask}
        />
      </div>
    );
  }
}

export default EveryDayView;

import * as React from 'react';
import Button from '../../components/button';
import styled from 'styled-components';
import Item from '../../components/item';
import NewTask from '../../components/newTask';


interface TasksContainerState {
  isHide?: boolean;
}

interface TasksContainerProps {
  everyDayTasks?: any;
  finishTask?: any;
  completedTasks?: any;
  todayTasks?: any;
  addTask?: any;
}

export const TasksContainerBlock: React.StatelessComponent = props => (
    <div className="tasks-conteiner">
        <img className="tasks-conteiner__logo" src="./empty.png"/>
        <div className="tasks-conteiner__text">Запланируйте обязательные задачи 
        на каждый день и они отобразятся здесь</div>
        <Button text="Запланировать на каждый день"/>
    </div>
);


export class TasksContainer extends React.Component<TasksContainerProps, TasksContainerState> {
  constructor(props) {
    super(props);
    this.state = {
      isHide: false,
    };
  }

  checkTasks(): boolean {
    if (localStorage.getItem('bgcolor')) {
      return true;
    }
    return false;
  }

  componentWillMount() {
    localStorage.setItem('bgcolor', 'red');
    // localStorage.clear();

    if (this.checkTasks()) {
      this.setState({
        isHide: true,
      });
    }
  }

  render() {
    const { finishTask, addTask } = this.props;
    const isHide: boolean = this.state['isHide'];
    let { everyDayTasks, completedTasks, todayTasks } = this.props;

    everyDayTasks = everyDayTasks.map((item, i) => {
      return(
        <li className="tasks-list__item" key={i}>
            <Item content={item} finishTask={finishTask} index={i}></Item>
        </li>
      );
    });

    completedTasks = completedTasks.map((item, i) => {
      return(
        <li className="tasks-list__item" key={i}>
            <Item content={item} completedTask></Item>
        </li>
      );
    });

    todayTasks ? todayTasks = todayTasks.map((item, i) => {
      return(
        <li className="tasks-list__item" key={i}>
            <Item content={item} todayTask finishTask={finishTask} index={i}></Item>
        </li>
      );
    }) : null;

    if (!isHide) {
      return(
        <TasksContainerBlock></TasksContainerBlock>
      );
    }

    return(
        <div>
            <ul className="tasks-list">
                {everyDayTasks}
            </ul>    
            <h2 className="subtitile">ДОПОЛНИТЕЛЬНЫЕ НА СЕГОДНЯ</h2>
            {todayTasks ?
                <ul className="tasks-list">
                    {todayTasks} 
                </ul>
            :null
            }
            <NewTask addTask={addTask}/>
            {completedTasks ?
                <div> 
                    <h2 className="subtitile">ВЫПОЛНЕННЫЕ</h2>
                    <ul className="tasks-list">
                        {completedTasks}
                    </ul>
                </div>
            :null
            }
        </div>
    );
  }
}

export default TasksContainer;

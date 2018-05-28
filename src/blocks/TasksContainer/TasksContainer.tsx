import * as React from 'react';
import Button from '../../components/Button';
import Item from '../../components/Item';
import NewTask from '../../components/NewTask';
import EverydayBlock from '../../blocks/EverydayBlock';
import TodayBlock from '../../blocks/TodayBlock';
import CompletedBlock from '../../blocks/CompletedBlock';
import Greetings from '../../blocks/Greetings';

interface TasksContainerState {
  greetingsIsHide: boolean;
}

interface TasksContainerProps {
  everyDayTasks?: any;
  setTaskFinished?: any;
  completedTasks?: any;
  todayTasks?: any;
  addTask?: any;
  typeOfList?: string;
}

export class TasksContainer extends React.Component<TasksContainerProps,TasksContainerState> {
  constructor(props) {
    super(props);
    this.state = {
      greetingsIsHide: false,
    };
    
    this.setGreetingsHide = this.setGreetingsHide.bind(this);
    
  }

  checkTasksExist(): boolean {
    if (localStorage.getItem('bgcolor')) {
      return true;
    }
    return false;
  }

  setGreetingsHide() {
    this.setState({
      greetingsIsHide: true,
    });
  }

  componentWillMount() {
    localStorage.setItem('bgcolor', 'red');
    localStorage.clear();

    this.setState({
      greetingsIsHide: this.checkTasksExist(),
    });
    
  }

  render() {
    const { 
      setTaskFinished, 
      addTask, 
      typeOfList, 
      everyDayTasks,
      completedTasks,
      todayTasks,
    } = this.props;

    const { greetingsIsHide } = this.state;
    const todayPlaceholder: string = 'Новая задача на сегодня...';
    const everydayPlaceholder: string = 'Новая задача на каждый день...';


    if (!greetingsIsHide) {
      return <Greetings setGreetingsHide={this.setGreetingsHide}/>;
    }

    return (
      <div>
        <EverydayBlock 
          everyDayTasks={everyDayTasks} 
          setTaskFinished={setTaskFinished} 
        />
        <TodayBlock 
          todayTasks={todayTasks} 
          setTaskFinished={setTaskFinished} 
        />
        <NewTask 
          addTask = { addTask }
          taskType = { 
            typeOfList === 'today' ?
            'todayTasks' : 'everydayTasks'
          } 
          placeholder= {
            typeOfList === 'today' ?
            todayPlaceholder : everydayPlaceholder
          }
        />
        <CompletedBlock
          completedTasks={completedTasks}
        />
      </div>
    );
  }
}

export default TasksContainer;

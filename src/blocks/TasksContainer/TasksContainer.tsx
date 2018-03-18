import * as React from 'react';
import Button from '../../components/Button';
import Item from '../../components/Item';
import NewTask from '../../components/NewTask';
import EveryDayTasksList from '../../blocks/EveryDayTasksList';
import TodayTasksList from '../../blocks/TodayTasksList';
import CompletedTasksList from '../../blocks/CompletedTasksList';

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
  }

  checkTasks(): boolean {
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
    // localStorage.clear();

    this.setState({
      greetingsIsHide: this.checkTasks(),
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
      
    const EverydayBlock = () => {
      return everyDayTasks ? 
        (
          <div>
            <ul className="tasks-list">
              <EveryDayTasksList 
                everyDayTasks={everyDayTasks} 
                setTaskFinished={setTaskFinished} 
              />
            </ul>
          </div>
        ) 
        : null;
    };

    const TodayBlock = () => {
      return todayTasks ? 
       (
        <div>
          <h2 className="subtitile">ДОПОЛНИТЕЛЬНЫЕ НА СЕГОДНЯ</h2>
          <ul className="tasks-list">
            <TodayTasksList
              todayTasks={everyDayTasks} 
              setTaskFinished={setTaskFinished} 
            />
          </ul>
        </div>
      ) 
      : null;
    };

    const CompletedBlock = () => {
      return completedTasks ? 
        (
          <div>
            <h2 className="subtitile">ВЫПОЛНЕННЫЕ</h2>
            <ul className="tasks-list">
              <CompletedTasksList
                completedTasks={completedTasks}
              />
            </ul>
          </div>
        ) 
        : null;
    };

    const Greetings: React.StatelessComponent = props => (
      <div className="tasks-conteiner">
        <img className="tasks-conteiner__logo" src="./empty.png" />
        <div className="tasks-conteiner__text">
          Запланируйте обязательные задачи на каждый день и они отобразятся здесь
        </div>
        <Button text="Запланировать на каждый день" onClick={this.setGreetingsHide.bind(this)}/>
      </div>
    );


    if (!greetingsIsHide) {
      return <Greetings />;
    }

    return (
      <div>
        <EverydayBlock />
        <TodayBlock />
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
        <CompletedBlock />
      </div>
    );
  }
}

export default TasksContainer;

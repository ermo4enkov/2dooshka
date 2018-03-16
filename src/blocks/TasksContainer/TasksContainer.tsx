import * as React from 'react';
import Button from '../../components/Button';
import Item from '../../components/Item';
import NewTask from '../../components/NewTask';

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

    if (this.checkTasks()) {
      this.setState({
        greetingsIsHide: true,
      });
    }
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

    const everyDayTasksList = everyDayTasks ? everyDayTasks.map((item, i) => {
      return (
        <li className="tasks-list__item" key={i}>
          <Item 
            content={item} 
            setTaskFinished={setTaskFinished} 
            index={i} 
          />
        </li>
      );
    }) : null;

    const completedTasksList = completedTasks ? completedTasks.map((item, i) => {
      return (
        <li className="tasks-list__item" key={i}>
          <Item content={item} completedTask />
        </li>
      );
    }) : null;

    const todayTasksList = todayTasks ? todayTasks.map((item, i) => {
      return (
            <li className="tasks-list__item" key={i}>
              <Item
                content={item}
                todayTask
                setTaskFinished={setTaskFinished}
                index={i}
              />
            </li>
      );
    }) : null;
      
    const EverydayBlock = () => {
      return everyDayTasks ? (
        <div>
          <ul className="tasks-list">{everyDayTasksList}</ul>
        </div>
      ) 
     : null;
    };

    const TodayBlock = () => {
      return todayTasks ? (
        <div>
          <h2 className="subtitile">ДОПОЛНИТЕЛЬНЫЕ НА СЕГОДНЯ</h2>
          <ul className="tasks-list">{todayTasksList}</ul>
        </div>
     ) 
     : null;
    };

    const CompletedBlock = () => {
      return completedTasks ? (
          <div>
            <h2 className="subtitile">ВЫПОЛНЕННЫЕ</h2>
            <ul className="tasks-list">{completedTasksList}</ul>
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
          addTask={addTask} 
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

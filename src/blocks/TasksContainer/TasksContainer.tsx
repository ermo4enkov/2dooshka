import * as React from 'react';
import Button from '../../components/Button';
import Item from '../../components/Item';
import NewTask from '../../components/NewTask';

interface TasksContainerState {
  isHide?: boolean;
}

interface TasksContainerProps {
  everyDayTasks?: any;
  setTaskFinished?: any;
  completedTasks?: any;
  todayTasks?: any;
  addTask?: any;
  typeOfList?: string;
}

const Greetings: React.StatelessComponent = props => (
  <div className="tasks-conteiner">
    <img className="tasks-conteiner__logo" src="./empty.png" />
    <div className="tasks-conteiner__text">
      Запланируйте обязательные задачи на каждый день и они отобразятся здесь
    </div>
    <Button text="Запланировать на каждый день"/>
  </div>
);

export class TasksContainer extends React.Component<TasksContainerProps,TasksContainerState> {
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
    const { 
      setTaskFinished, 
      addTask, 
      typeOfList, 
      everyDayTasks, 
      completedTasks, 
      todayTasks,
    } = this.props;

    const isHide: boolean = this.state['isHide'];

    const todayPlaceholder: string = 'Новая задача на сегодня...';
    const everydayPlaceholder: string = 'Новая задача на каждый день...';

    const everyDayTasksList = everyDayTasks.map((item, i) => {
      return (
        <li className="tasks-list__item" key={i}>
          <Item content={item} setTaskFinished={setTaskFinished} index={i} />
        </li>
      );
    });

    const completedTasksList = completedTasks.map((item, i) => {
      return (
        <li className="tasks-list__item" key={i}>
          <Item content={item} completedTask />
        </li>
      );
    });

    const todayTasksList = todayTasks.map((item, i) => {
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
    });
      

    if (!isHide) {
      return <Greetings />;
    }

    return (
      <div>
        <ul className="tasks-list">{everyDayTasksList}</ul>

        {todayTasks ? (
          <div>
            <h2 className="subtitile">ДОПОЛНИТЕЛЬНЫЕ НА СЕГОДНЯ</h2>
            <ul className="tasks-list">{todayTasksList}</ul>
          </div>
        ) : null}

        <NewTask addTask={addTask} placeholder={typeOfList === 'today' ?
         todayPlaceholder : everydayPlaceholder}
        />

        {completedTasks ? (
          <div>
            <h2 className="subtitile">ВЫПОЛНЕННЫЕ</h2>
            <ul className="tasks-list">{completedTasksList}</ul>
          </div>
        ) : null}

      </div>
    );
  }
}

export default TasksContainer;

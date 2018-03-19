import * as React from 'react';
import Item from  '../../components/Item';

interface TasksListProps {
  any?: any;
  setTaskFinished?: any;
  todayTasks: any;
}


const TasksList: React.StatelessComponent<TasksListProps> = props => 
  props['todayTasks'].map((item, i) => {
    return (
      <li className="tasks-list__item" key={i}>
        <Item
          content={item}
          todayTask
          setTaskFinished={props['setTaskFinished']} 
          index={i}
        />
      </li>
    );
  });

const TodayBlock: React.StatelessComponent<TasksListProps> = (props) => {
  return props['todayTasks'] ? 
     (
      <div>
        <h2 className="subtitile">ДОПОЛНИТЕЛЬНЫЕ НА СЕГОДНЯ</h2>
        <ul className="tasks-list">
          <TasksList
            todayTasks={props['todayTasks']} 
            setTaskFinished={props['setTaskFinished']} 
          />
        </ul>
      </div>
    ) 
    : null;
};



export default TodayBlock;

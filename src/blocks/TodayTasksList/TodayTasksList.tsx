import * as React from 'react';
import Item from  '../../components/Item';

interface TodayTasksListProps {
  any?: any;
  setTaskFinished?: any;
  todayTasks: any;
}
const TodayayTasksList: React.StatelessComponent<TodayTasksListProps> = props => 
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

export default TodayayTasksList;

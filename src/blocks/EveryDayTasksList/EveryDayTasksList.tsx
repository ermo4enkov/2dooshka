import * as React from 'react';
import Item from  '../../components/Item';

interface EveryDayTasksListProps {
  setTaskFinished?: any;
  everyDayTasks?: any;
}
const EveryDayTasksList: React.StatelessComponent<EveryDayTasksListProps> = props => 
  props['everyDayTasks'].map((item, i) => {
    return (
      <li className="tasks-list__item" key={i}>
        <Item 
          content={item} 
          index={i}
          setTaskFinished={props['setTaskFinished']} 
        />
      </li>
    );
  });

export default EveryDayTasksList;

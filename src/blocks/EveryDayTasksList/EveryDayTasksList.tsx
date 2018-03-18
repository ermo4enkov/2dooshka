import * as React from 'react';
import Item from  '../../components/Item';

interface EveryDayTasksListProps {
  any?: any;
  setTaskFinished?: any;
  everyDayTasks?: any;
}
const EveryDayTasksListProps: React.StatelessComponent<EveryDayTasksListProps> = props => 
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

export default EveryDayTasksListProps;

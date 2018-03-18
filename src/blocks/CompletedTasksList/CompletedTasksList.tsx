import * as React from 'react';
import Item from  '../../components/Item';

interface CompletedTasksListProps {
  completedTasks: any;
}
const CompletedTasksList: React.StatelessComponent<CompletedTasksListProps> = props => 
  props['completedTasks'].map((item, i) => {
    return (
      <li className="tasks-list__item" key={i}>
        <Item content={item} completedTask />
      </li>
    );
  });

export default CompletedTasksList;

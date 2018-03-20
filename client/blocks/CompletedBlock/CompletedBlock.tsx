import * as React from 'react';
import Item from  '../../components/Item';

interface CompletedBlockProps {
  completedTasks: any;
}
const CompletedTasksList: React.StatelessComponent<CompletedBlockProps> = props => 
  props['completedTasks'].map((item, i) => {
    return (
      <li className="tasks-list__item" key={i}>
        <Item content={item} completedTask />
      </li>
    );
  });

const CompletedBlock: React.StatelessComponent<CompletedBlockProps> = (props) => {
  return props['completedTasks'] ? 
      (
        <div>
          <h2 className="subtitile">ВЫПОЛНЕННЫЕ</h2>
          <ul className="tasks-list">
            <CompletedTasksList
              completedTasks={props['completedTasks']}
            />
          </ul>
        </div>
      ) 
      : null;
};

export default CompletedBlock;

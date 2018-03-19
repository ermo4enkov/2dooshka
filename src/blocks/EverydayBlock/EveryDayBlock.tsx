import * as React from 'react';
import Item from  '../../components/Item';

interface EverydayBlockProps {
  setTaskFinished?: any;
  everyDayTasks: any;
}
const EveryDayTasksList: React.StatelessComponent<EverydayBlockProps> = props => 
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

const EverydayBlock: React.StatelessComponent<EverydayBlockProps> = (props) => {
  return props['everyDayTasks'] ? 
      (
        <div>
          <ul className="tasks-list">
            <EveryDayTasksList 
              everyDayTasks={props['everyDayTasks']} 
              setTaskFinished={props['setTaskFinished']} 
            />
          </ul>
        </div>
      ) 
      : null;
};

export default EverydayBlock;

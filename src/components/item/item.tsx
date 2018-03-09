import * as React from 'react';
import styled from 'styled-components';
import Button from '../button/button';
import Checkbox from 'material-ui/Checkbox';

const StyledItem = styled.div`
    width: ${(props: ItemProps) => props.example ? '70%' : 'auto'};
    border-radius: 3px;
    padding: 18px 16px;
    font-size: 16px;
    background-color: ${(props: ItemProps) => props.completedTask ? '#f2fef8' : '#ffffff'};
    color: ${(props: ItemProps) => props.completedTask ? '#a9f6d0' : '#000'};   
    border:  ${(props: ItemProps) => props.todayTask ? 'dashed 1px' : 'solid 1px'}; 
    border-color: ${(props: ItemProps) => props.completedTask ? '#a9f6d0' : '#516166'};
`;

const checkboxStyle = {
  fontFamily: 'Source Sans Pro',
  fontSize: 16,
};

const checkboxStyleDisable = {
  textDecoration: 'line-through',
};

interface ItemProps {
  content?: string;
  example?: boolean;
  newTask?: boolean;
  redaction?: boolean;
  everyDayTask?: boolean;
  finishTask?: any;
  completedTask?: boolean;
  todayTask?: boolean;
  index?: number;
}

interface ItemState {
  status?: string;
  checked: boolean;
}

export class Item extends React.Component<ItemProps, ItemState> {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  switchChecked(event) {
    const type = event.target.attributes['aria-details']['nodeValue'];
    const name = event.target.name;
    const value = event.target.value;
    this.props.finishTask.finishTask(name, value, type);
  }

  render() {
    const { content, newTask, redaction, index, completedTask, todayTask } = this.props;
    const check = this.state.checked;

    return(
        <StyledItem {...this.props} {...this.state}>
            <Checkbox
                disabled={completedTask ? true : false}
                checked={completedTask ? true : false}
                labelStyle={completedTask ? checkboxStyleDisable : checkboxStyle}
                label={content}
                onCheck={this.switchChecked.bind(this)}
                name={content}
                value={index}
                aria-details={todayTask ? 'today_tasks' : 'everyday_tasks'}
            />
        </StyledItem>
    );
  }
}

export default Item;

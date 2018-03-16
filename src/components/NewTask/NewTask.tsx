import * as React from 'react';
import styled from 'styled-components';
import Add from 'material-ui/svg-icons/content/add';
import Button from '../../components/Button';

const StyledItem = styled.div`
  width: auto;
  border-radius: 3px;
  padding: 18px 16px;
  font-size: 16px;
  background-color: rgba(208, 216, 220, 0.5);
  color: #d0d8dc;
  display: flex;
  padding: 10px;
  align-items: center;
  min-height: 40px;
`;

const StyledInput = styled.input`
  border: none;
  background: none;
  width: 100%;
  font-family: Source Sans Pro;
  font-size: 16px;
`;

const StyledButtonCont = styled.div`
  display: flex;
`;

const plusStyles = {
  color: '#93A4AD',
  cursor: 'pointer',
};

interface NewTaskProps {
  addTask?: any;
}

interface NewTaskStates {
  content: string;
}

class NewTask extends React.Component<NewTaskProps, NewTaskStates> {
  constructor(newTaskProps, newTaskStates) {
    super(newTaskProps);
    this.state = {
      content: '',
    };
  }

  addNewTask(event) {
    const value = this.state.content;
    this.props.addTask.addTask(value);
    this.setState({
      content: '',
    });
  }

  changeContent(event) {
    this.setState({
      content: event.target.value,
    });
  }

  deleteContent() {
    this.setState({
      content: '',
    });
  }

  render() {
    const ButtonsBlock = () => {
      return this.state.content ? (
        <StyledButtonCont>
          <Button text="Добавить" onClick={this.addNewTask.bind(this)} />
          <Button
            text="Отмена"
            cancel
            onClick={this.deleteContent.bind(this)}
          />
        </StyledButtonCont>
      ) : null
    };

    return (
      <StyledItem>
        <Add style={plusStyles} />
        <StyledInput
          type="text"
          placeholder="Новая задача на сегодня..."
          onChange={this.changeContent.bind(this)}
          value={this.state.content}
        />
        <ButtonsBlock />
      </StyledItem>
    );
  }
}

export default NewTask;

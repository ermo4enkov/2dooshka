import * as React from "react";
import styled from "styled-components";
import Plus from "../icons/plus";
import Checkbox from 'material-ui/Checkbox';
import Button from "../../components/button";

const StyledItem = styled.div`
    width: auto;
    border-radius: 3px;
    padding: 18px 16px;
    font-size: 16px;
    background-color: rgba(208,216,220, 0.5);
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
    display:flex;
`;

interface NewTaskProps {
    addTask?: any;
};


interface NewTaskStates {
    content: string;
};


class NewTask extends React.Component<NewTaskProps, NewTaskStates> {
    constructor(newTaskProps, newTaskStates) {
        super(newTaskProps);
        this.state = {
            content: ""
        };
    }

    addTask(event) {
        const value = this.state.content;
        this.props.addTask(value);
        this.setState({
            content: ""
        });
    }

    changeContent(event) {
        this.setState({
            content: event.target.value
          });
    }

    deleteContent(event) {
        this.setState({
            content: ""
          });
    }

    render() {

        const ButtonsBlock = () => 
        {
            return this.state.content?
                <StyledButtonCont>
                    <Button text="Добавить" onClick={this.addTask.bind(this)}/>
                    <Button text="Отмена" cancel onClick={this.deleteContent.bind(this)}/>
                </StyledButtonCont>
            : 
            null
        }

        return(
            <StyledItem>
                <Plus/>
                <StyledInput type="text" placeholder="Новая задача на сегодня..." onChange={this.changeContent.bind(this)} value={this.state.content}/>
                <ButtonsBlock/>
            </StyledItem>
        )
    }
}

export default NewTask;
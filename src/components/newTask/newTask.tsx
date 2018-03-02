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

interface newTaskProps {
    visible?: boolean;
};


interface newTaskStates {
    content: string;
};


class NewTask extends React.Component<newTaskProps,newTaskStates>{
    constructor(newTaskProps,newTaskStates) {
        super(newTaskProps)
        this.state = {
            content: ""
        }
    }

    showContent(){
        console.log(this.state.content);
    };

    changeContent(event){
        this.setState({
            content: event.target.value
          });
    }

    render() {
        return(
            <StyledItem>
                <Plus/>
                <StyledInput type="text" placeholder="Новая задача на сегодня..." onChange={this.changeContent.bind(this)}/>
                <StyledButtonCont >
                    <Button text="Добавить" onClick={this.showContent.bind(this)}/>
                    <Button text="Отмена" cancel/>
                </StyledButtonCont>
            </StyledItem>
        )
    }
}

export default NewTask;
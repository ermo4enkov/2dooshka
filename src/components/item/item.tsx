import * as React from "react";
import styled from "styled-components";
import Button from "../button/button";
import Checkbox from 'material-ui/Checkbox';

interface ItemProps  {
    content?: string;
    example?: boolean;
    newTask?: boolean;
    redaction?: boolean;
    everyDayTask?: boolean;
    setTask?: any;
    completedTask?: boolean;
    todayTask?: boolean;
    index?: number; 
}

interface ItemState  {
    status?: string;
    checked: boolean;   
}

const StyledItem = styled.div`
    width: ${(props: ItemProps) => props.example? "70%": "auto"};
    border-radius: 3px;
    padding: 18px 16px;
    font-size: 16px;
    background-color: ${(props: ItemProps) => props.completedTask? "#f2fef8": "#ffffff"};
    color: ${(props: ItemProps) => props.completedTask? "#a9f6d0": "#000"};   
    border:  ${(props: ItemProps) => props.todayTask? "dashed 1px": "solid 1px"}; 
    border-color: ${(props: ItemProps) => props.completedTask? "#a9f6d0": "#516166"};
`;

const checkbox_style = {
    fontFamily: "Source Sans Pro",
    fontSize: 16,
}

const checkbox_style_dis = {
    textDecoration: "line-through",
}


export class Item extends React.Component<ItemProps, ItemState> {
    constructor(ItemProps, ItemState) {
        super(ItemProps)
        this.state = {
            checked: false
        }
    }

    switchChecked(event, name){
        name = event.target.attributes["aria-details"]["nodeValue"];
        this.props.setTask(event,name);
    }

    render() {
        const {content, newTask, redaction, index, completedTask, todayTask} = this.props;
        let check = this.state.checked;

        return(
            <StyledItem {...this.props} {...this.state}>
                <Checkbox 
                    disabled={completedTask? true: false} 
                    checked={completedTask? true: false} 
                    labelStyle={completedTask? 
                    checkbox_style_dis: checkbox_style}
                    label={content} 
                    onCheck={this.switchChecked.bind(this)} 
                    name={content} 
                    value={index}
                    aria-details={todayTask? "today_tasks": "everyday_tasks"}
                />
            </StyledItem>
        )
    }
}

export default Item;
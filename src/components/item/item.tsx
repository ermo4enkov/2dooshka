import * as React from "react";
import styled from "styled-components";
import Button from "../button/button";
import Plus from "../icons/plus";
import Checkbox from 'material-ui/Checkbox';

interface ItemProps  {
    content?: string;
    example?: boolean;
    newTask?: boolean;
    redaction?: boolean;
    everyDayTask?: boolean;
    setTask?: any;
    completedTask?: boolean;
    index?: number; 
}

interface ItemState  {
    status?: string;
    checked: boolean;   
}

const StyledItem = styled.div`
    width: ${(props: ItemProps) => props.example? "70%": "100%"};
    border-radius: 3px;
    padding: 18px 16px;
    font-size: 16px;
    background-color: ${(props: ItemProps) => props.completedTask? "#f2fef8": "#ffffff"};
    color: ${(props: ItemProps) => props.completedTask? "#a9f6d0": "#000"};   
    border: solid 1px;
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

    switchChecked(event){
        this.props.setTask(event);
    }

    render() {
        const {content, newTask, redaction} = this.props;
        let check = this.state.checked;
        return(
            <StyledItem {...this.props} {...this.state}>
                <Checkbox disabled={this.props.completedTask? true: false} checked={this.props.completedTask? true: false} labelStyle={this.props.completedTask? checkbox_style_dis: checkbox_style} label={content} onCheck={this.switchChecked.bind(this)} name={this.props.content} value={this.props.index}/>
            </StyledItem>
        )
    }
}

export default Item;
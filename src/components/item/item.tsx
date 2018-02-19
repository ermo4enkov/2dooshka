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
}

interface ItemState  {
    status?: string;
    checked: boolean;   
}

const StyledItem = styled.div`
    display: flex;
    width: ${(props: ItemProps) => props.example? "70%": "100%"};
    border-radius: 3px;
    padding: 8px 16px;
    font-size: 16px;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    color: ${(props: ItemProps) => props.completedTask? "red": "#000"};   
    border: ${(props: ItemProps) => props.completedTask? "solid 1px red": "solid 1px #516166"};    
`;

export class Item extends React.Component<ItemProps, ItemState> {
    constructor(ItemProps, ItemState) {
        super(ItemProps)
        this.state = {
            checked: false
        }
    }

    switchChecked(){
        this.props.setTask();
    }

    render() {
        const {content, newTask, redaction} = this.props;
        let check = this.state.checked;

        return(
            <StyledItem {...this.props} {...this.state}>
                <Checkbox label={content} onCheck={this.switchChecked.bind(this)}/>
            </StyledItem>
        )
    }
}

export default Item;
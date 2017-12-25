import * as React from "react";
import styled from 'styled-components';
import Button from '../button/button';
import Plus from '../icons/plus'

interface ItemProps  {
    content?: string;
    example?: boolean;
}

interface ItemState  {
    status?: string;
}

const StyledItem = styled.div`
    display: inline-flex;
    width: ${(props: ItemProps) => props.example? "70%": "100%"};
    border-radius: 3px;
    padding: 8px 16px;
    font-size: 16px;
    background-color: rgba(208, 216, 220, 0.6);
    align-items: center;
    justify-content: space-between;
`
''

export class Item extends React.Component<ItemProps, ItemState> {
    constructor(ItemProps, ItemState) {
        super(ItemProps)
    }

    render() {

        return(
            <StyledItem {...this.props}>
                <Plus/>
                {this.props.content}
                <Button text="Добавить" example/>
            </StyledItem>
        )
    }
}

export default Item;
import * as React from "react";
import styled from 'styled-components';
import Button from '../button/button'

interface ItemProps  {
    name?: string;
}

interface ItemState  {
    status?: string;
}

function Plus(props: ItemProps): JSX.Element{
    return(
        <img src="" alt=""/>
    )
}
const StyledItem = styled.div`
    display: inline-block;
    width: 100%;
    border-radius: 3px;
    padding: 16px;
    font-size: 16px;
    background-color: #d0d8dc;
`
''
export class Item extends React.Component<ItemProps, ItemState> {
    constructor(ItemProps, ItemState) {
        super(ItemProps)
    }

    render() {

        return(
            <StyledItem>
                +
                {this.props.name}
                <Button text="Добавить" example/>
            </StyledItem>
        )
    }
}

export default Item;
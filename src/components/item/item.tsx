import * as React from "react";
import styled from 'styled-components';

interface ItemProps  {
    name?: string;
}

interface ItemState  {
    status?: string;
}

export class Item extends React.Component<ItemProps, ItemState> {
    constructor(ItemProps, ItemState) {
        super(ItemProps)
    }

    render() {

        return(
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default Item;
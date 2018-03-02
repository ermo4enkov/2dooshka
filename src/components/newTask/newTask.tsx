import * as React from "react";
import styled from "styled-components";
import Plus from "../icons/plus";
import Checkbox from 'material-ui/Checkbox';

const StyledItem = styled.div`
    width: auto;
    border-radius: 3px;
    padding: 18px 16px;
    font-size: 16px;
    background-color: rgba(208,216,220, 0.5);
    color: #d0d8dc;
    display: flex;
`;

const StyledInput = styled.input`
    border: none;
    background: none;
    width: 100%;
    font-family: Source Sans Pro;
    font-size: 16px;
`

class NewTask extends React.Component{
    // constructor(){

    // }
    render() {
        return(
            <StyledItem>
                <Plus/>
                <StyledInput type="text" placeholder="Новая задача на сегодня..."/>
                <div>
                    
                </div>
            </StyledItem>
        )
    }
}

export default NewTask;
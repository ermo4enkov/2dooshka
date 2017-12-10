import * as React from "react";
import styled from 'styled-components'
// export interface HelloProps { compiler: string; framework: string; }

interface ButtonProps {
    text: string;
    add?: boolean;
    disable?: boolean;
    children?: React.ReactChild;
}

interface ButtonState {
    isBlocked: boolean;
}

const StyledButton = styled.div`
    border-radius: 5px;
    // font-family: SourceSansPro;
    font-size: 16px;
    text-align: center;
    color: #fff;
    padding: 10px 20px;
    display: inline-block;
    cursor: pointer;
    color: ${(props: ButtonProps) => props.add? "red": 
             props.disable? "grey": '#000'
    };
    background-color: blue;
`;

export class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);
    }
    render() {
        return (
            <StyledButton {...this.props}>
                {this.props.text}
            </StyledButton>
        );
    }
}





export default Button;
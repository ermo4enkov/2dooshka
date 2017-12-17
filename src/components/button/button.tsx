import * as React from "react";
import styled from 'styled-components';

interface ButtonProps {
    text: string;
    type?: string;
    example?: boolean;
    disable?: boolean;
}

interface ButtonState {
    isBlocked?: boolean;
}

const StyledButton = styled.div`
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
    padding: 10px 20px;
    display: inline-block;
    cursor: pointer;
    color: ${(props: ButtonProps) => (props.type === "cancel" || props.disable === true )? "#93a4ad": '#fff'
    };
    background-color: ${(props: ButtonProps) => props.type === "cancel"? "#f6f7f8": '#00b0ff'
    };
    margin-right: ${(props: ButtonProps) => props.example? "20px": '0'
    };
    border: ${(props: ButtonProps) => props.disable === true? "solid 1px #d0d8dc;": "none"}
    background-color: ${(props: ButtonProps) => props.disable === true? "#f6f7f8": ''
    };
    
`;

export class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);
        this.state = {
            isBlocked: false,
        };

        this.setDisable = this.setDisable.bind(this);

    }

    setDisable(){
        this.setState({isBlocked: true});
    }

    render() {
        return (
            <StyledButton {...this.props} disable={this.state.isBlocked} onClick={this.setDisable}>
                {this.props.text}
            </StyledButton>
        );
    }
}

export default Button;
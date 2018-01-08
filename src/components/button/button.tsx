import * as React from "react";
import styled from "styled-components";

interface ButtonProps {
    text: string;
    type?: string;
    example?: boolean;
    disabled?: boolean;
    hover?: boolean;
    isLoading?: boolean;
}

interface ButtonState {
    isBlocked?: boolean;
    isLoaded?: boolean;
}

const StyledButton = styled.div`
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
    padding: 10px 20px;
    display: inline-block;
    cursor: ${( props: ButtonProps) => (props.disabled === true || props.isLoading === true)? "default": "pointer"};
    color: ${(props: ButtonProps) => (props.type === "cancel" || props.disabled === true )? "#93a4ad": '#fff'
    };
    background-color: ${(props: ButtonProps) => props.type === "cancel"? "#f6f7f8": '#00b0ff'
    };
    margin-right: ${(props: ButtonProps) => props.example? "20px": '0'
    };
    border: ${(props: ButtonProps) => (props.disabled === true || props.isLoading === true)? "solid 1px #d0d8dc;": "none"}
    background-color: ${(props: ButtonProps) => (props.disabled === true || props.isLoading === true)? "#f6f7f8": ''
    };
    min-width: 80px;
    box-shadow: ${(props: ButtonProps) => props.hover === true? "inset 0 -2px 0 0 rgba(0, 0, 0, 0.1);": "none"};
    filter: ${(props: ButtonProps) => props.hover === true? "brightness(90%);": "none"};
    
        &:hover{
            box-shadow: ${(props: ButtonProps) => (props.disabled === true || props.isLoading === true)? "none": "inset 0 -2px 0 0 rgba(0, 0, 0, 0.1);"}
            filter: brightness(90%);
        }
    
`;

export class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);

        this.state = {
            isBlocked: false,
            isLoaded: false
        };

        this.setDisable = this.setDisable.bind(this);

    }

    setDisable(){
        this.setState({isBlocked: !this.state.isBlocked});
    }

    // setLoading(){
    //     this.setState({isBlocked: !this.state.isBlocked});
    // }

    render() {
        return (
            <StyledButton {...this.props} disabled={this.props.disabled? this.props.disabled: this.state.isBlocked} isLoading={this.props.isLoading? this.props.isLoading: this.state.isLoaded} onClick={this.setDisable}>
                {this.props.isLoading ? <div className={this.props.isLoading? "loader": ""}>Loading...</div>: this.props.text }
            </StyledButton>
        );
    }
}

export default Button;
import * as React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  example?: boolean;
  disabled?: boolean;
  hover?: boolean;
  isLoading?: boolean;
  cancel?: boolean;
  onClick?: any;
}

interface ButtonState {
  isBlocked?: boolean;
  isLoaded?: boolean;
}


const STYLEDBUTTON = styled.div`
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
    padding: 10px 20px;
    display: inline-block;
    cursor: ${(props: ButtonProps) =>
      props.disabled || props.isLoading ? 'default' : 'pointer'};
    color: ${(props: ButtonProps) =>
      props.cancel || props.disabled ? '#93a4ad' : '#fff'};
    background-color: ${(props: ButtonProps) =>
      props.cancel ? '#f6f7f8' : '#00b0ff'};
    margin-right: ${(props: ButtonProps) => (props.example ? '20px' : '0')};
    border: ${(props: ButtonProps) =>
      props.disabled || props.isLoading ? 'solid 1px #d0d8dc;' : 'none'};
    background-color: ${(props: ButtonProps) =>
      props.disabled || props.isLoading ? '#f6f7f8' : ''};
    min-width: 80px;
    box-shadow: ${(props: ButtonProps) =>
      props.hover === true ? 'inset 0 -2px 0 0 rgba(0, 0, 0, 0.1);' : 'none'};
    filter: ${(props: ButtonProps) =>
      props.hover === true ? 'brightness(90%);' : 'none'};
    
        &:hover{
            box-shadow: ${(props: ButtonProps) =>
              props.disabled || props.isLoading
                ? 'none'
                : 'inset 0 -2px 0 0 rgba(0, 0, 0, 0.1);'}
            filter: brightness(90%);
        }    
`;

export class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);

    this.state = {
      isBlocked: false,
      isLoaded: false,
    };
  }

  render() {
    return (
      <STYLEDBUTTON
        {...this.props}
        disabled={
          this.props.disabled ? this.props.disabled : this.state.isBlocked
        }
        isLoading={
          this.props.isLoading ? this.props.isLoading : this.state.isLoaded
        }
      >
        {this.props.isLoading ? (
          <div className={this.props.isLoading ? 'loader' : ''}>Loading...</div>
        ) : (
          this.props.text
        )}
      </STYLEDBUTTON>
    );
  }
}

export default Button;

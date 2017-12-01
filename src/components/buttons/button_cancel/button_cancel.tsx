import * as React from "react";

// export interface ButtonAddProps { name: string; }
interface ButtonProps {
    text: string;
    isBlocked?: boolean;
}

interface ButtonState {
    isBlocked: boolean;
}

export class ButtonCancel extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);

        this.state = {
            isBlocked: props.isBlocked
        };
    }

    changeState() {
        this.state = {
            isBlocked: true
        };
    }

    render() {
        return (
            <div className={"button button_cancel " + (this.state.isBlocked ? "is-blocked" : " ")} onClick={this.changeState.bind(this)}>
                {this.props.text}
            </div>
        );
    }
}

export default ButtonCancel;
import * as React from "react";

// export interface HelloProps { compiler: string; framework: string; }

interface ButtonProps {
    text: string;
}

interface ButtonState {
    isBlocked: boolean;
}

export class ButtonAdd extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);
    }
    render() {
        return (
            <div className="button button_add">
                {this.props.text}
            </div>
        );
    }
}

export default ButtonAdd;
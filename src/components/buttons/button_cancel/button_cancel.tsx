import * as React from "react";

// export interface ButtonAddProps { name: string; }
interface ButtonProps {
    text: string;
}

interface ButtonState {
    isBlocked: boolean;
}

export class ButtonCancel extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
		super(props);
    }

    render() {
        return (
            <div className="button button_cancel">
                {this.props.text}
            </div>
        );
    }
}

export default ButtonCancel;
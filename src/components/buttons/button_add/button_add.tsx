import * as React from "react";

// export interface HelloProps { compiler: string; framework: string; }

export interface ButtonProps {
    text: string;
}

export class ButtonAdd extends React.Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }
    render() {
        return (
            <div className="button button_add">
                {this.props.text}
                {/* sdsdds */}
            </div>
        );
    }
}

export default ButtonAdd;
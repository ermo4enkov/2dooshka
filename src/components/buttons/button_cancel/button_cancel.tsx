import * as React from "react";

// export interface ButtonAddProps { name: string; }

export class ButtonCancel extends React.Component {
    constructor(props: string) {
		super(props);
    }

    render() {
        return (
            <div className="button button_cancel">
                {/* {this.props.name} */}
                Отмена
            </div>
        );
    }
}

export default ButtonCancel;
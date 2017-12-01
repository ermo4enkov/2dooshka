import * as React from "react";

// export interface ButtonAddProps { name: string; }

export class ButtonAdd extends React.Component {
    constructor(props: string) {
		super(props);
    }

    render() {
        return (
            <div className="button button_add">
                {/* {this.props.name} */}
                Добавить
            </div>
        );
    }
}

export default ButtonAdd;
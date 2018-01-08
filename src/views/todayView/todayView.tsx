import * as React from "react";
import  Introduction from "../../blocks/introduction";

export class TodayView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="conteiner">
                <h1 className="title">Сегодня</h1>
                <Introduction/>
            </div>
        );
    }
}

export default TodayView;
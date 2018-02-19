import * as React from "react";
import  Introduction from "../../blocks/introduction";

export class TodayView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        let everyDay_tasks = this.props["data_user"]["everyday_tasks"];

        return(
            <div className="conteiner">
                <h1 className="title">Сегодня</h1>
                <Introduction everyDay_tasks={everyDay_tasks}/>
            </div>
        );
    }
}

export default TodayView;
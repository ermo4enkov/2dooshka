import * as React from "react";
import  Introduction from "../../blocks/introduction";



export class EveryDayView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let everyDay_tasks = this.props["data_user"]["everyday_tasks"];
        let completed_tasks = this.props["data_user"]["completed_tasks"];
        const setTask = this.props["setTask"];
        
        return(
            <div className="conteiner">
                <h1 className="title">Каждый день</h1>
                <Introduction everyDay_tasks={everyDay_tasks} completed_tasks={completed_tasks}/>
            </div>
        );
    }
}

export default EveryDayView;
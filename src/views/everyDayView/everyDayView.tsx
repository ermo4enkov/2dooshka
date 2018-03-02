import * as React from "react";
import TasksConteiner from "../../blocks/tasksConteiner";



export class EveryDayView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const everyDay_tasks = this.props["data_user"]["everyday_tasks"];
        const completed_tasks = this.props["data_user"]["completed_tasks"];
        const additional_tasks = this.props["data_user"]["additional_tasks"];
        const finishTask = this.props["finishTask"];
        
        return(
            <div className="conteiner">
                <h1 className="title">Каждый день</h1>
                <TasksConteiner everyDay_tasks={everyDay_tasks} finishTask={finishTask} completed_tasks={completed_tasks}/>
            </div>
        );
    }
}

export default EveryDayView;
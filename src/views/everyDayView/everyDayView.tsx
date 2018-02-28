import * as React from "react";
import TasksConteiner from "../../blocks/tasksConteiner";



export class EveryDayView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let everyDay_tasks = this.props["data_user"]["everyday_tasks"];
        let completed_tasks = this.props["data_user"]["completed_tasks"];
        let additional_tasks = this.props["data_user"]["additional_tasks"];
        const setTask = this.props["setTask"];
        
        return(
            <div className="conteiner">
                <h1 className="title">Каждый день</h1>
                <TasksConteiner everyDay_tasks={everyDay_tasks} setTask={setTask} completed_tasks={completed_tasks}/>
            </div>
        );
    }
}

export default EveryDayView;
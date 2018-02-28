import * as React from "react";
import TasksConteiner from "../../blocks/tasksConteiner";

export class TodayView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        let everyDay_tasks = this.props["data_user"]["everyday_tasks"];
        let completed_tasks = this.props["data_user"]["completed_tasks"];
        let today_tasks = this.props["data_user"]["today_tasks"];
        const setTask = this.props["setTask"];

        return(
            <div className="conteiner">
                <h1 className="title">Сегодня</h1>
                <TasksConteiner everyDay_tasks={everyDay_tasks} setTask={setTask} completed_tasks={completed_tasks} today_tasks={today_tasks}/>
            </div>
        );
    }
}

export default TodayView;
import * as React from "react";
import Button from "../../components/button";
import styled from "styled-components";
import Item from "../../components/item";
import NewTask from "../../components/newTask"


interface TasksContainerState {
    isHide?: boolean;
}

interface TasksContainerProps {
    everyDay_tasks?: any;
    finishTask?: any;
    completed_tasks?: any;
    today_tasks?: any;
    addTask?: any;
}

export const TasksContainerBlock: React.StatelessComponent = props => (
    <div className="tasks-conteiner">
        <img className="tasks-conteiner__logo" src="./empty.png" />
        <div className="tasks-conteiner__text">Запланируйте обязательные задачи на каждый день и они отобразятся здесь</div>
        <Button text="Запланировать на каждый день"></Button>
    </div>
);


export class TasksContainer extends React.Component<TasksContainerProps,TasksContainerState> {
    constructor(props) {
        super(props);
        this.state = {
            isHide: false,
        };
    }

    checkTasks(): boolean {
        if (localStorage.getItem("bgcolor")) {
            return true;
        }
        return false;
    };

    componentWillMount() {
        localStorage.setItem('bgcolor', 'red');
        // localStorage.clear();

        if (this.checkTasks()) {
            this.setState({
                isHide: true,
            });
        };
    };

    render() {
        const finishTask = this.props["finishTask"];
        const addTask = this.props["addTask"];
        
        const isHide: boolean = this.state["isHide"];

        let everyDay_tasks = this.props.everyDay_tasks;
        let completed_tasks = this.props.completed_tasks;

        let today_tasks = this.props.today_tasks;

        everyDay_tasks = everyDay_tasks.map(function (item, i) {
            return(
                <li className="tasks-list__item" key={i}>
                    <Item content={item} finishTask={finishTask} index={i}></Item>
                </li>
            );
        });

        completed_tasks = completed_tasks.map(function(item, i) {
            return(
                <li className="tasks-list__item" key={i}>
                    <Item content={item} completedTask></Item>
                </li>
            )
        });

        today_tasks? today_tasks = today_tasks.map(function(item, i) {
            return(
                <li className="tasks-list__item" key={i}>
                    <Item content={item} todayTask finishTask={finishTask} index={i}></Item>
                </li>
            )
        }): null;

        let block = null;

        if (!isHide) {
            return(
                block = <TasksContainerBlock></TasksContainerBlock>
            );
        }

        return(
            <div>
                <ul className="tasks-list">
                    {everyDay_tasks}
                </ul>
                
                <h2 className="subtitile">ДОПОЛНИТЕЛЬНЫЕ НА СЕГОДНЯ</h2>
                {today_tasks?
                        <ul className="tasks-list">
                            {today_tasks} 
                        </ul>
                    :null}
                <NewTask addTask={addTask}/>
                {completed_tasks?
                <div> 
                    <h2 className="subtitile">ВЫПОЛНЕННЫЕ</h2>
                
                    <ul className="tasks-list">
                        {completed_tasks}
                    </ul>
                </div>
                :null}

            </div>
        );
    }
};

export default TasksContainer;


import * as React from "react";
import Button from "../../components/button";
import styled from "styled-components";
import Item from '../../components/item';


interface IntroductionState {
    isHide?: boolean;
}

interface IntroductionProps {
    everyDay_tasks?: any;
    setTask?: any;
    completed_tasks?: any;
}

export const IntroductionBlock: React.StatelessComponent = props => (
    <div className="introduction">
        <img className="introduction__logo" src="./empty.png" />
        <div className="introduction__text">Запланируйте обязательные задачи на каждый день и они отобразятся здесь</div>
        <Button text="Запланировать на каждый день"></Button>
    </div>
);


export class Introduction extends React.Component<IntroductionProps,IntroductionState> {
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
        const setTask = this.props["setTask"];
        const isHide: boolean = this.state["isHide"];

        let everyDay_tasks = this.props.everyDay_tasks;
        let completed_tasks = this.props.completed_tasks;

        everyDay_tasks = everyDay_tasks.map(function (item, i) {
            return(
                <li className="tasks-list__item" key={i}>
                    <Item content={item} newTask setTask={setTask} index={i}></Item>
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

        let block = null;

        if (!isHide) {
            return(
                block = <IntroductionBlock></IntroductionBlock>
            );
        }

        return(
            <div>
                <ul className="tasks-list">
                    {everyDay_tasks}
                </ul>
                
                <h2 className="subtitile">Выполненные</h2>
                
                <ul className="tasks-list">
                    {completed_tasks}
                </ul>

            </div>
        );
    }
};

export default Introduction;


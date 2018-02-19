import * as React from "react";
import Button from "../../components/button";
import styled from "styled-components";
import Item from '../../components/item';

// import { db } from "../../constants/db";


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
        let everyDay_tasks = this.props.everyDay_tasks;
        let completed_tasks = this.props.completed_tasks;


        const setTask = this.props["setTask"];

        everyDay_tasks = everyDay_tasks.map(function (item, i) {

            return(
                <li className="storybook__item" key={i}>
                    <Item content={item} newTask setTask={setTask}></Item>
                </li>
            )
            
        });

        completed_tasks =completed_tasks.map(function(item, i) {
            return(
                <li className="storybook__item" key={i}>
                    <Item content={item} completedTask></Item>
                </li>
            )
        })



        const isHide: boolean = this.state["isHide"];
        let block = null;

        if (!isHide) {
            return(
                block = <IntroductionBlock></IntroductionBlock>
            );
        }

        return(
            <div>
            <div>
                <ul className="storybook__list" >
                    {everyDay_tasks}
                </ul>
            </div>
            <div>
                <ul className="storybook__list" >
                    {completed_tasks}
                </ul>
            </div>
            </div>
        );
    }
};

export default Introduction;


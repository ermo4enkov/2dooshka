import * as React from "react";
import Button from "../../components/button";
import styled from "styled-components";

// import { db } from "../../constants/db";


interface IntroductionState {
    isHide?: boolean;
}

export const IntroductionBlock: React.StatelessComponent = props => (
    <div className="introduction">
        <img className="introduction__logo" src="./empty.png" />
        <div className="introduction__text">Запланируйте обязательные задачи на каждый день и они отобразятся здесь</div>
        <Button text="Запланировать на каждый день"></Button>
    </div>
);


export class Introduction extends React.Component<IntroductionState> {
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
        // localStorage.setItem('bgcolor', 'red');
        localStorage.clear();

        if (this.checkTasks()) {
            this.setState({
                isHide: true,
            });
        };
    };

    render() {

        const data = {
            "user": {
               "name": "Roma"
            },
            "tasks": {
                "everyday_Tasks": [
                "30 pages",
                "sport",
                "hexlet",
                "english"
                ],
                "today_Tasks": ["wash plates", "clean room"],
            },
            "grades": [
               { "date": { "$date": 11122018 }, "tasks": 5, "score": 2 },
               { "date": { "$date": 12122018 }, "tasks": 5, "score": 4 },
               { "date": { "$date": 13122018 }, "tasks": 5, "score": 5 }
            ]
        };

        console.log(data.tasks.everyday_Tasks);

        const isHide: boolean = this.state["isHide"];
        let block = null;

        if (!isHide) {
            return(
                block = <IntroductionBlock></IntroductionBlock>
            );
        }

        return(
            <div>
                {block}
            </div>
        );
    }
};

export default Introduction;


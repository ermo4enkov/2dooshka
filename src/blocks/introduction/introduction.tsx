import * as React from "react";
import Button from "../../components/button";
import styled from "styled-components";

interface IntroductionState {
    isHide?: boolean;
}

// const container = styled.div`
//     display: $({})
// `

export const IntroductionBlock: React.StatelessComponent = props => (
    <div className="introduction">
        <div className="introduction__logo"></div>
        <div className="introduction__text">Запланируйте обязательные задачи на каждый день и они отобразятся здесь</div>
        <Button text="Запланировать на каждый день"></Button>
    </div>
);


export class Introduction extends React.Component<IntroductionState> {
    constructor(props) {
        super(props);
        this.state = {
            isHide: true,
        };
    }

    // checkTasks(): boolean {
        
    // }
    render() {
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


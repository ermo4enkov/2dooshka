import * as React from "react";
import Button from "../../components/button";

interface IntroductionState {
    isHide: boolean;
}

export class Introduction extends React.Component<IntroductionState> {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div className="introduction">
                <div className="introduction__logo"></div>
                <div className="introduction__text">Запланируйте обязательные задачи на каждый день и они отобразятся здесь</div>
                <Button text="Запланировать на каждый день"></Button>
            </div>
        );
    }
};

export default Introduction;


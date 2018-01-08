import * as React from "react";
import Button from "../../components/button";



export class Introduction extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div className="introduction">
                <div className="introduction__logo"></div>
                <div className="introduction__text">Запланируйте обязательные задачи на каждый день и они отобразятся здесь</div>
                <Button text="Hui"></Button>
            </div>
        );
    }
};

export default Introduction;


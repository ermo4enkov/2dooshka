import * as React from "react";
import Button from '../../components/button';


export class ButtonsCollection extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="storybook__element">
                <h1 className="header">Buttons</h1>
                <div>
                    <ul className="storybook__list">
                        <li className="storybook__item">
                            <div className="storybook__name">Default behavior</div>
                            <Button text="Добавить" example/>
                            <Button text="Отменить" type="cancel"/>
                        </li>
                        <li className="storybook__item">
                            <div className="storybook__name">Hover</div>
                            <Button text="Добавить" example hover/>
                            <Button text="Отменить" hover type="cancel"/>
                        </li>
                        <li className="storybook__item">
                            <div className="storybook__name">Disabled</div>
                            <Button disabled text="Добавить"/>
                        </li>
                        <li className="storybook__item">
                            <div className="storybook__name">Loading...</div>
                            <Button isLoading text="Добавить"/>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}


export default ButtonsCollection;

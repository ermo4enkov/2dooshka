import * as React from "react";
import { Button } from "../components/button/button";
import { ColorsPallete } from "../components/colors/colorspallete";
// import { textExample } from "../components/text/text";

export class StoryBook extends React.Component {

    render(){

        return(
            <div className="lego">
                <ColorsPallete/>
                <div className="lego__element">
                    <h1 className="title">Текст</h1>
                    <div>Шрифт — Source Sans Pro</div>
                    <h1>H1 - Каждый день</h1>
                    <h2>H2 - Каждый день</h2>
                    <div>Text - Каждый день</div>
                </div>
                <Button add text="Добавь"/>
                <Button disable text="Disabled"/>
            </div>
        )
    }
}

export default StoryBook;
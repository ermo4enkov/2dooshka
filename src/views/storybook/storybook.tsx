import * as React from "react";
import { Button } from "../../components/button/button";
import { ColorsPallet } from "../../blocks/colorspallet/colorspallete";
import { ButtonsCollection } from "../../blocks/buttonscollection/buttonscollection";


export class StoryBook extends React.Component {

    render(){

        return(
            <div className="storybook">
                <ColorsPallet/>
                <div className="storybook__element">
                    <h1 className="header">Текст</h1>
                    <div>Шрифт — Source Sans Pro</div>
                    <h1>H1 - Каждый день</h1>
                    <h2 className="subtitile">H2 - Каждый день</h2>
                    <div>Text - Каждый день</div>
                </div>
                <ButtonsCollection/>
            </div>
        )
    }
}

export default StoryBook;
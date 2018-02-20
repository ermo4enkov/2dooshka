import * as React from "react";
import { Button } from "../../components/button/button";
import { ColorsPallet } from "../../blocks/colorspallet/colorspallete";
import { ButtonsCollection } from "../../blocks/buttonscollection/buttonscollection";
import { ItemsCollection } from "../../blocks/listitemscollection/itemscollection";
import { Calendar } from "../../blocks/calendar/calendar";


export class StoryBook extends React.Component {

    render(){

        return(
            <div className="storybook">
                <ColorsPallet/>
                <div className="storybook__element">
                    <h1 className="headerText">Text</h1>
                    <div>Font — Source Sans Pro</div>
                    <h1>H1 - everyday</h1>
                    <h2 className="subtitile">H2 - everyday</h2>
                    <div>Text - everyday</div>
                </div>
                <ButtonsCollection/>
                <ItemsCollection />
                <Calendar />
            </div>
        )
    }
}

export default StoryBook;
import * as React from "react";
import { Button } from "../components/button/button";
import { ColorsPallete } from "../components/colors/colorspallete";
import { textExample } from "../components/text";

export class StoryBook extends React.Component {

    render(){

        return(
            <div className="lego">
                <ColorsPallete/>
                <textExample/>
                <Button add text="Добавь"/>
                <Button disable text="Disabled"/>
            </div>
        )
    }
}

export default StoryBook;
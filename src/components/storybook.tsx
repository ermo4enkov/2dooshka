import * as React from "react";
import { Button } from "./button/button";
import { ColorsPallete } from "./colors/colorspallete";

export class StoryBook extends React.Component {

    render(){

        return(
            <div className="lego">
                <ColorsPallete/>
                <Button add text="Добавь"/>
                <Button disable text="Disabled"/>
            </div>
        )
    }
}

export default StoryBook;
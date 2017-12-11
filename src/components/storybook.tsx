import * as React from "react";
import { Button } from "./button/button";
import { ColorPallete } from "./colors/colors";

export class StoryBook extends React.Component {

    render(){

        return(
            <div className="lego">
                <ColorPallete grey/>
                <Button add text="Добавь"/>
                <Button disable text="Disabled"/>
            </div>
        )
    }
}

export default StoryBook;
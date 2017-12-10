import * as React from "react";
import { Button } from "./button/button_add";
import { ColorPallete } from "./colors/colors";

// export interface HelloProps { compiler: string; framework: string; }

export const Storybook = () =>
    <div>
        <ColorPallete grey/>
        <Button add text="Добавь"/>
        <Button disable text="Disabled"/>
    </div>;
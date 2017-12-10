import * as React from "react";
import { Button } from "../components/buttons/button_add/button_add";


export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) =>
    <h1>Hello from {props.compiler} and {props.framework}!
        <Button add text="Добавь"/>
        <Button disable text="Disabled"/>
    </h1>;
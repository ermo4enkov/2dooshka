import * as React from "react";
import { ButtonAdd } from "../components/buttons/button_add/button_add";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!<ButtonAdd/></h1>;
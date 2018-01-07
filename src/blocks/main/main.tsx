import * as React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import styled from "styled-components";
import Header from "../header/header";

export class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header></Header>
        );
    }

};

export default Main;
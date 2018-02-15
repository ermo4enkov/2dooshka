import * as React from "react";
// import { Router, Route, IndexRoute, browserHistory } from "react-router";
import styled from "styled-components";
import  Header  from "../header/header";
import  Main  from "../main/main";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Main/>
            </div>
        );
    }

};

export default App;

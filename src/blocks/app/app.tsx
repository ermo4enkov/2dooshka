import * as React from "react";
// import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { connect } from 'react-redux'


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

function mapStateToProps (state) {
    return {
        error: state.error,
        login: state.login,
        user_type: state.user_type,
        fetching: state.fetching,
        data: state.data,
        data_user: state.data_user,
        succesVerifyCode: state.succesVerifyCode,
        type_of_input: state.type_of_input,
        checkTypeOfUser: state.checkTypeOfUser
    }
}

export default connect(mapStateToProps)(App);

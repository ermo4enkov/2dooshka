import * as React from "react";
// import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { connect } from 'react-redux'
import { bindActionCreators } from "redux";


import styled from "styled-components";
import  Header  from "../header/header";
import  Main  from "../main/main";

import * as setTask from "../../redux/actions/setTask";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { error, login, user_type, fetching, data, data_user, succesVerifyCode, type_of_input } = this.props;

        const data_user = this.props["data_user"];
        
        const { setTask } = this.props["setTask"];

        return (
            <div>
                <Header />
                <Main data_user={data_user} setTask={setTask}/>
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
};

function mapDispatchProps(dispatch: any) {
    return{
        setTask: bindActionCreators(setTask, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchProps)(App);

import * as React from "react";
import styled from "styled-components";

import Logo from "../../components/logo";
import Plus from "../../components/icons/plus";

import { Link } from "react-router-dom";


export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="header">
                <Logo/>
                <Link to="/">Сегодня</Link>
                <Link to="/everyday">Каждый день</Link>
                <Link to="/storybook">storybook</Link>
            </div>
        );
    }
}

export default Header;
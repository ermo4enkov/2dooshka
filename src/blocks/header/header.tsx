import * as React from "react";
import styled from "styled-components";

import Logo from "../../components/logo";
import Plus from "../../components/icons/plus";


export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="header">
                <Logo></Logo>
                <a href="/today">Сегодня</a>
                <a href="/everyday">Каждый день</a>
            </div>

        );
    }
}

export default Header;
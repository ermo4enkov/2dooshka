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
            <div className="Header">
                <Plus></Plus>
                <Logo></Logo>
            </div>

        );
    }
}

export default Header;
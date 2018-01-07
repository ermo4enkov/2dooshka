import * as React from "react";
import styled from 'styled-components';
import ContentAdd from 'material-ui/svg-icons/content/add';

const PlusStyles = {
    color: "#93A4AD",
    cursor: 'pointer'
}

const Plus = () => (
    <ContentAdd style={PlusStyles}/>
);

export default Plus;
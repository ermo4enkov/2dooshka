import * as React from "react";
import styled from 'styled-components';

interface ColorProps{
    greyLight?: boolean;
    grey?: boolean;
    greyDark?: boolean;
    greyDarker?: boolean;
    black?: boolean;
    mint?: boolean;
    good?: boolean;
    empty?: boolean;
}


const Pallete = styled.div`
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: ${(props: ColorProps) => props.greyLight? "#f6f7f8":
                                               props.grey? "#d0d8dc": 
                                               props.greyDark? '#93a4ad':
                                               props.greyDarker? '#7c909b':
                                               props.black? '#28323':
                                               props.mint? '#f2fef8':
                                               props.good? '#a9f6d0':
                                               props.empty? '#1fb6ff': '#fff'
    };
`
export class ColorPallete extends React.Component<ColorProps> {
    constructor(props: ColorProps){
        super(props);
    }

    render () {

        return(
            <div className="lego__element">
                <h1 className="title">Цвета</h1>
                <div className="colors__wrap">
                    <Pallete {...this.props}></Pallete>
                </div>
            </div>
        )
    }



}

export default ColorPallete;
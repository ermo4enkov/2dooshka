import * as React from "react";
import styled from 'styled-components';

interface ColorPalletProps {
    color?: string;
    children?: any;
}

const PalletExample = styled.div`
    display: block;
    width: 70px;
    height: 70px;
    background-color: ${(props: ColorPalletProps) => props.color === "greyLight"? "#f6f7f8":
    props.color === "grey"? "#d0d8dc":
        props.color === "greyDark"? '#93a4ad':
            props.color === "greyDarker"? '#7c909b':
                props.color === "black"? '#283238':
                    props.color === "mint"? '#f2fef8':
                        props.color === "good"? '#a9f6d0':
                            props.color === "empty"? '#1fb6ff': '#fff'
    };
`

function Pallet(props: ColorPalletProps): JSX.Element {
    return (
        <div>
            <PalletExample color={props.color}></PalletExample>
            <span className="hint">{props.color}</span>
        </div>
    );
};

let colorArray: [string] = ["greyLight","grey","greyDark","greyDarker", "black", "mint", "good", "empty" ];

export class ColorsPallet extends React.Component<ColorPalletProps> {
    constructor(props: ColorPalletProps){
        super(props);
    }

    render () {

        let colorsCollection = colorArray.map(function(color, index){
            return (
                <Pallet key={index} color={color} />
            )
        });

        return(
            <div className="storybook__element">
                <h1 className="headerText">Colors</h1>
                <div className="colors__wrap">
                    {colorsCollection}
                </div>
            </div>
        )
    }



}

export default ColorsPallet;
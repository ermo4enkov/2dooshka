import * as React from "react";
import styled from 'styled-components';

// interface ColorProps{
//     greyLight?: boolean;
//     grey?: boolean;
//     greyDark?: boolean;
//     greyDarker?: boolean;
//     black?: boolean;
//     mint?: boolean;
//     good?: boolean;
//     empty?: boolean;
// }


// const Pallete = styled.div`
//     display: inline-block;
//     width: 40px;
//     height: 40px;
//     background-color: ${(props: ColorProps) => props.greyLight? "#f6f7f8":
//                                                props.grey? "#d0d8dc":
//                                                props.greyDark? '#93a4ad':
//                                                props.greyDarker? '#7c909b':
//                                                props.black? '#283238':
//                                                props.mint? '#f2fef8':
//                                                props.good? '#a9f6d0':
//                                                props.empty? '#1fb6ff': '#fff'
//     };
// `



interface ColorPalleteProps {
    color?: string;
    children?: any;
}

const PalletExample = styled.div`
    display: block;
    width: 70px;
    height: 70px;
    background-color: ${(props: ColorPalleteProps) => props.color === "greyLight"? "#f6f7f8":
    props.color === "grey"? "#d0d8dc":
        props.color === "greyDark"? '#93a4ad':
            props.color === "greyDarker"? '#7c909b':
                props.color === "black"? '#283238':
                    props.color === "mint"? '#f2fef8':
                        props.color === "good"? '#a9f6d0':
                            props.color === "empty"? '#1fb6ff': '#fff'
    };
`

function Pallet(props: ColorPalleteProps): JSX.Element {
    return (
        <div>
            <PalletExample color={props.color}></PalletExample>
            <span className="hint">{props.color}</span>
        </div>
    );
};


export class ColorsPallete extends React.Component<ColorPalleteProps> {
    constructor(props: ColorPalleteProps){
        super(props);
    }

    render () {

        return(
            <div className="lego__element">
                <h1 className="header">Цвета</h1>
                <div className="colors__wrap">
                    <Pallet color="greyLight"/>
                    {/*<Pallete greyLight></Pallete>*/}
                    <Pallet color="grey"></Pallet>
                    <Pallet color="greyDark"></Pallet>
                    <Pallet color="greyDarker"></Pallet>
                    <Pallet color="black"></Pallet>
                    <Pallet color="mint"></Pallet>
                    <Pallet color="good"></Pallet>
                    <Pallet color="empty"></Pallet>
                </div>
            </div>
        )
    }



}

export default ColorsPallete;
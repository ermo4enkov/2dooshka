import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<helloprops, {}=""> {
   render() {
       return <h1>Привет от {this.props.compiler} и {this.props.framework}!</h1>;
   }
}
</helloprops>
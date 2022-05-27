import React, { Component } from "react";

///FORMA DE CLASE
// class Componente extends Component {
//   render() {
//     return <h2>{this.props.msg}</h2>;
//   }
// }

//FORMA DE FUNCION
// function Componente(props) {
//   return <h2>{props.msg}</h2>;
// }

//FORMA DE FUNCION FLECHA
const Componente = (props) => <h2>{props.msg}</h2>;

export default Componente;

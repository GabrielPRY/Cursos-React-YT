import React, { Component, Fragment } from "react";

//badre
export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <Fragment>
        <h2>CLASE 12 - COMUNICACIÓN ENTRE COMPONENTES</h2>
        <p>
          <b>{this.state.contador}</b>
        </p>
        <Hijo
          incrementarContadores={this.incrementarContador}
          mensaje="Mensaje para el hijo 1"
        ></Hijo>
        <Hijo
          mensaje="Mensaje para el hijo 2"
          incrementarContadores={this.incrementarContador}
        ></Hijo>
      </Fragment>
    );
  }
}

///hijo
function Hijo({ mensaje, incrementarContadores }) {
  return (
    <>
      <h3>{mensaje}</h3>
      <button onClick={incrementarContadores}>Incrementar</button>
    </>
  );
}

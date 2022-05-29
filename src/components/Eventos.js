import React, { Component } from "react";

//LEER LO DEL BIND PARA EVENTOS EN COMPONENTES DE CLASES
export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>Sumar</button>
          <button onClick={this.restar}>Restar</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

//usa properties initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  ///arrow function
  sumar = (e) => {
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  //arrow function
  restar = (e) => {
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>Sumar</button>
          <button onClick={this.restar}>Restar</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// function Boton(props) {
//   return <button onClick={props.myOnClick}>Botón hecho componente</button>;
// }

// const Boton = (props) => (
//   <button onClick={props.myOnClick}>Botón hecho componente</button>
// );

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Más sobre Eventos</h2>
        <button onClick={(e) => this.handleClick(e, "AMIGUIN desde parametro")}>
          Saludar
        </button>

        {/*EVENTO PERSONALIZADO DE COMPONENTE DESDE PROP*/}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "AMIGUIN desde parametro componente")
          }
        ></Boton>
      </div>
    );
  }
}

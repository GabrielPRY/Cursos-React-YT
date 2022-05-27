import React, { Component } from "react";

//comp de prueba
function Login() {
  return (
    <div>
      <h3>Login</h3>
    </div>
  );
}

//compo de prueba
function Logout() {
  return (
    <div>
      <h3>Logout</h3>
    </div>
  );
}

///se usa un if reducido para ver que componente renderizar, nada más
export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      session: true,
    };
  }
  render() {
    return (
      <div>
        <h2>Renderizado Condicional</h2>
        {this.state.session ? <Login /> : <Logout />}
      </div>
    );
  }
}

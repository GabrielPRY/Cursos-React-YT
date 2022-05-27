import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista({ name, web }) {
  return (
    <li>
      <a href={web} target="_blank">
        {name}
      </a>
    </li>
  );
}

///mapear arrays siempre debe llevar key, en casos de verdas usar el npm uuidv4
export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    // console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.season.map((season, index) => (
            <li key={index}>{season}</li>
          ))}
        </ol>
        <h3>Frameworks FrontEnd JS</h3>
        <ol>
          {data.frameworks.map(({ id, name, web }) => (
            <ElementoLista key={id} name={name} web={web} />
          ))}
        </ol>
      </div>
    );
  }
}

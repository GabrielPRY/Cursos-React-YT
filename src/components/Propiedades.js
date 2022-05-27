import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.boleano ? "True" : "False"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.reactelement}</li>
        <li>{props.reactcomponent}</li>
      </ul>
    </div>
  );
}

///propiedad por defecto
Propiedades.defaultProps = {
  porDefecto: "Props por defecto",
};

//Solo debe ser numerico y requerido si o si
Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};

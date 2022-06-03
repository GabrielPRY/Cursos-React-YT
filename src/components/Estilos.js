import React from "react";
import "../css/estilos.css";
import moduleSyles from "../css/Estilos.module.css";
import "../css/Estilos.scss";

export default function Estilos() {
  let myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };

  return (
    <section className="estilos">
      <h2>CLASE 23 - ESTILOS CSS EN REACT</h2>
      <h3 className="bg-react">Estilos en hoja css externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: ".25rem", margin: "1rem" }}
      >
        Estilos en linea - atributos style
      </h3>
      <h3 className="bg-react" style={myStyles}>
        Estilos en linea desde un objeto
      </h3>
      <h3 className="bg-react">
        Estilos en hoja agregando Normalize
        <br />
        <code>@import-normalize</code>
      </h3>
      <h3 className={moduleSyles.error}>Estilos con modulos</h3>
      <h3 className={moduleSyles.success}>Estilos con modulos</h3>
      <h3 className="bg-sass">Estilos con sass</h3>
    </section>
  );
}

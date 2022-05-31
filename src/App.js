import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RendereizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AJAXApis from "./components/AJAXApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AJAXHooks from "./components/AJAXHooks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="CLASE 4 - Hola soy un Componente XD" />
          <hr />
          <Propiedades
            cadena="String"
            numero={9}
            booleano={false}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "jon", correo: "jon@gmail.com" }}
            funcion={(num) => num * num}
            reactelement={<i>Jon Conor</i>}
            reactcomponent={
              <Componente msg="soy un componente pasado como prop" />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <h1>CLASE 9, 10 Y 11 EVENTOS</h1>
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <Padre />
          <hr />
          <CicloVida />
          <hr />
          <AJAXApis />
          <hr />
          <ContadorHooks titulo="follow" />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          <hr />
          <AJAXHooks />
        </section>
      </header>
    </div>
  );
}

export default App;

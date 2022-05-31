import React, { useEffect, useState } from "react";

function Reloj2(props) {
  return <h3>{props.hora}</h3>;
}

export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }

    return () => {
      //console.log("Fase de Desmontaje");
      clearInterval(temporizador);
    };
  }, [visible]); ///ESTO SE ACTIVA CADA VEZ QUE CAMBIA LA VARIABLE VISIBLE

  return (
    <>
      <h2>CLASE 18 - Reloj con Hooks</h2>
      {visible && <Reloj2 hora={hora} />}
      <button onClick={() => setVisible(true)}>iniciar</button>
      <button onClick={() => setVisible(false)}>detener</button>
    </>
  );
}

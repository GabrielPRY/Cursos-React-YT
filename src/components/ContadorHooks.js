import React, { useState } from "react";

export default function ContadorHooks(props) {
  //   console.log(useState());
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <h2>Clase 16 - Hook UseState</h2>
      <h3>
        {contador} {props.titulo}
      </h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
    </>
  );
}

//valores por defectos
ContadorHooks.defaultProps = {
  titulo: "CLICKS",
};

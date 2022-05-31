import React, { useEffect, useState } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //console.log("moviendo scroll");

    const dectectarScroll = () => {
      setScrollY(window.pageYOffset);
      // console.log(scrollY);
    };

    window.addEventListener("scroll", dectectarScroll);

    return () => {
      window.removeEventListener("scroll", dectectarScroll);
    };

    //ASI SOLO SE EJECUTA CUANDO LA VARIABLE PASADA EN CORCHETE CAMBIE
  }, [scrollY]);

  //SI SE DEJA EN BLANCO SOLO SE EJECUTA UNA VEZ
  useEffect(() => {
    // console.log("Fase de Montaje");
  }, []);

  //SE DEBE EVITAR DEJAR ASI UN USEEFFECT
  //   useEffect(() => {
  //     console.log("Fase de Actualizacion");
  //   });

  useEffect(() => {
    return () => {
      // console.log("Fase de Desmonate");
    };
  });
  return (
    <>
      <h3>Clase 17 - Hooks - Use Effect y el ciclo de la vida</h3>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}

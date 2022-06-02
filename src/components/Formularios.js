import React, { useState } from "react";

//SI VAS A USAR UNA VARIABLE DE ESFADO COMO VALUE EN UN FORM
// DEBES CONTROLARLA CON UN ONCHANGE
// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [pick, setPick] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [generos, setGeneros] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("El formulario, se ha enviado");
//   };
//   return (
//     <>
//       <h2>CLASE 22 - Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre: </label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//         <p>Elige tu JS</p>
//         <input
//           type="radio"
//           id="Vanilla"
//           name="pick"
//           value="Vanilla"
//           onChange={(e) => setPick(e.target.value)}
//           defaultChecked
//         />
//         <label htmlFor="Vanilla">Vanilla</label>
//         <input
//           type="radio"
//           id="React"
//           name="pick"
//           value="React"
//           onChange={(e) => setPick(e.target.value)}
//         />
//         <label htmlFor="React">React</label>
//         <input
//           type="radio"
//           id="Angular"
//           name="pick"
//           value="Angular"
//           onChange={(e) => setPick(e.target.value)}
//         />
//         <label htmlFor="Angular">Angular</label>
//         <input
//           type="radio"
//           id="Vue"
//           name="pick"
//           value="Vue"
//           onChange={(e) => setPick(e.target.value)}
//         />
//         <label htmlFor="Vue">Vue</label>
//         <input
//           type="radio"
//           id="Svelte"
//           name="pick"
//           value="Svelte"
//           onChange={(e) => setPick(e.target.value)}
//         />
//         <label htmlFor="Svelte">Svelte</label>

//         <p>ELIJE TU LENGUAJE DE PROGRAMACION</p>
//         <select
//           name="lenguaje"
//           onChange={(e) => setLenguaje(e.target.value)}
//           defaultValue=""
//         >
//           <option value="">-----</option>
//           <option value="js">JavaScript</option>
//           <option value="php">PHP</option>
//           <option value="py">Python</option>
//           <option value="go">GO</option>
//           <option value="rb">Ruby</option>
//         </select>

//         <p>ACEPTA LOS TERMINOS</p>
//         <label htmlFor="terminos">Acepto</label>
//         <input
//           type="checkbox"
//           id="terminos"
//           name="terminos"
//           onChange={(e) => setGeneros(e.target.checked)}
//         />
//         <br />
//         <input type="submit" />
//       </form>
//     </>
//   );
// }

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <>
      <h2>CLASE 22-Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elige tu Sabor JS Favorito:</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Elige tu lenguaje de programación favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

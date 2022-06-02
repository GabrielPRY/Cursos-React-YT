import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function HooksPersonalizados() {
  //   console.log(useFetch());
  let url = "https://pokeapi.co/api/v2/pokemon/";
  url = "https://jsonplaceholder.typicode.com/users";

  let { data, isPending, error } = useFetch(url);

  return (
    <>
      <h2>CLASE 20 - HOOKS PERSONALIZADOS</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h4>
        <mark>{JSON.stringify(error)}</mark>
      </h4>
      <h5>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </h5>
    </>
  );
}

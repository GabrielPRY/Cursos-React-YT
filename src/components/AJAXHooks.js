import React, { useState, useEffect } from "react";

function Pokemon2(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>
        {props.id} {props.name}
      </figcaption>
    </figure>
  );
}

export default function AJAXHooks() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      //console.log(json);

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        // console.log(json);
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h2>Clase 19 - PETICIONES ASINCRONAS CON HOOKS</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el, index) => (
          <Pokemon2 key={index} id={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}

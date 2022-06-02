import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    ///se crea una funcion asincrona
    const getData = async (url) => {
      try {
        ///se pone el away con un fech con la url
        let res = await fetch(url);

        ///si la respuesta no es ok
        if (!res.ok) {
          ///se lanza un error
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        ///se obtiene el dato de la respuesta
        let data = await res.json();

        //ac+atpdp salio bien
        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        ///agarra el error del throw
        setIsPending(true);
        setError(err);
      }
    };

    //se llama la funcion
    getData(url);
  }, [url]); //acá se actualiza por cada camvio de url

  ///retorna el dato, si esta pendiente y el error
  return { data, isPending, error };
};

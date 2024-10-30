import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const pokeContext = createContext();

export const PokeContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState({
    count: 0,
    next: 10,
    previous: null,
    results: [],
    all: [],
  });

  const getData = async () => {
    const res = await api.getAllPokemons();
    if (res) {
      setPokemons((prev) => ({
        ...prev,
        count: res.count,
        next: 10,
        previous: null,
        results: res.results.slice(0, 10),
        all: res.results,
      }));
      console.log(res);
    }
  };

  const refreshPokemons = () => {
    return pokemons;
  };

  useEffect(() => {
    return getData();
  }, []);

  return (
    <pokeContext.Provider
      value={{ pokemons, setPokemons, getData, getPokemons: refreshPokemons }}
    >
      {children}
    </pokeContext.Provider>
  );
};

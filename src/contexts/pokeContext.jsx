import { createContext, useEffect, useState } from "react";
import pokeApi from "../services/pokeApi";

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
    if (pokemons.all.length === 0) {
      const res = await pokeApi.getAllPokemons();
      if (res) {
        setPokemons((prev) => ({
          ...prev,
          count: res.count,
          next: 10,
          previous: null,
          results: res.results.slice(0, 10),
          all: res.results,
          fixed: res.results,
        }));
      }
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

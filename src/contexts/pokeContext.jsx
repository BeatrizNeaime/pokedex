import { createContext, useContext, useEffect, useState } from "react";
import pokeApi from "../services/pokeApi";
import serverApi from "../services/serverApi";
import * as signalR from "@microsoft/signalr";
import { toastContext } from "./toastContext";

export const pokeContext = createContext();

const connection = new signalR.HubConnectionBuilder()
  .configureLogging(signalR.LogLevel.Information)
  .withUrl("http://localhost:5284/pokemonHub")
  .build();

export const PokeContextProvider = ({ children }) => {
  const { setToast } = useContext(toastContext);
  const [hubConnection, setHubConnection] = useState();
  const [pokemons, setPokemons] = useState({
    count: 0,
    next: 10,
    previous: null,
    results: [],
    all: [],
    captured: [],
  });

  const createHubConnection = async () => {
    try {
      await connection.start();
      alert("Connected to hub");
      setHubConnection(connection);
    } catch (error) {
      console.clear();
      console.log(error);
    }
  };

  connection.onclose(async () => {
    alert("Connection closed, trying to reconnect...");
    setInterval(async () => {
      await createHubConnection();
    }, 3000);
  });

  const getCapturedPokemons = async () => {
    const res = await serverApi.getCapturedPokemons();
    if (res) {
      setPokemons((prev) => ({
        ...prev,
        captured: res,
      }));
    }
  };

  const getData = async () => {
    if (pokemons.all.length === 0) {
      const res = await pokeApi.getAllPokemons();
      if (res) {
        await getCapturedPokemons();
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

  const capturePokemon = async (userId, pokemonName) => {
    if (hubConnection) {
      try {
        await hubConnection.invoke("CapturePokemon", {
          userId: userId,
          pokemonName: pokemonName,
        });
      } catch (error) {
        setToast({
          open: true,
          title: "Error",
          message: error.message,
          type: "error",
        });
        console.error(error);
      } finally {
        await getCapturedPokemons();
      }
    }
  };

  useEffect(() => {
    createHubConnection();
    getData();

    if (hubConnection) {
      hubConnection.on("PokemonCaptured", (captured) => {
        setPokemons((prev) => ({
          ...prev,
          captured: [
            ...prev.captured,
            {
              pokemonName: captured?.pokemonName,
              capturedAt: new Date(captured?.capturedAt).toLocaleDateString(),
              user: captured?.user?.username,
            },
          ],
        }));
        setToast({
          open: true,
          title: "Pokémon captured!",
          message: `${captured?.pokemonName} was captured by ${captured?.user?.username}`,
          type: "info",
        });
      });
    }
  }, [hubConnection]);

  return (
    <pokeContext.Provider
      value={{
        pokemons,
        setPokemons,
        getData,
        getPokemons: refreshPokemons,
        capturePokemon,
      }}
    >
      {children}
    </pokeContext.Provider>
  );
};

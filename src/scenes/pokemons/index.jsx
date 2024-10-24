import { useEffect, useState } from "react";
import { PageContainer } from "./components";
import api from "./../../services/api";
import PokeCard from "./components/card";
import { Row } from "../../components/common";

const Pokemons = () => {

  const [pokeData, setPokeData] = useState({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  const getData = async () => {
    const response = await api.getPaginatedPokemons();
    if (response) {
      setPokeData((prev) => ({
        ...prev,
        count: response.count,
        next: response.next,
        previous: response.previous,
        results: response.results,
      }));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageContainer>
      <Row
        style={{
          flexWrap: "wrap",
          gap: "119px 16px",
        }}
      >
        {pokeData.results.map((pokemon) => (
          <PokeCard key={pokemon.name} data={pokemon} />
        ))}
      </Row>
    </PageContainer>
  );
};

export default Pokemons;

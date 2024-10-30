import { PageContainer } from "./components";
import PokeCard from "./components/card";
import { Row } from "../../components/common";
import { useContext, useEffect } from "react";
import { pokeContext } from "../../contexts/pokeContext";

const Pokemons = () => {
  const { pokemons, getPokemons } = useContext(pokeContext);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PageContainer>
      <Row
        style={{
          flexWrap: "wrap",
          gap: "100px 16px",
        }}
      >
        {pokemons.results.map((pokemon) => (
          <PokeCard key={pokemon.order} data={pokemon} />
        ))}
      </Row>
    </PageContainer>
  );
};

export default Pokemons;

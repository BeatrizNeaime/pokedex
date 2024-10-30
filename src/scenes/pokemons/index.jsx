import { PageContainer } from "./components";
import PokeCard from "./components/card";
import { Row } from "../../components/common";
import { useContext } from "react";
import { pokeContext } from "../../contexts/pokeContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Pokemons = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const { pokemons } = useContext(pokeContext);

  return (
    <PageContainer>
      <Row
        style={{
          flexWrap: "wrap",
          gap: "100px 16px",
          marginTop: desktop ? "" : "32px",
        }}
      >
        {pokemons.results.map((pokemon, index) => (
          <PokeCard key={index} data={pokemon} />
        ))}

        {pokemons.results.length === 0 && (
          <h1 style={{ textAlign: "center", width: "100%" }}>
            No results found
          </h1>
        )}
      </Row>
    </PageContainer>
  );
};

export default Pokemons;

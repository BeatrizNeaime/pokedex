import { PageContainer } from "./components";
import PokeCard from "./components/card";
import { Row } from "../../components/common";

const Pokemons = ({ data }) => {
  return (
    <PageContainer>
      <Row
        style={{
          flexWrap: "wrap",
          gap: "119px 16px",
        }}
      >
        {data.map((pokemon) => (
          <PokeCard key={pokemon.name} data={pokemon} />
        ))}
      </Row>
    </PageContainer>
  );
};

export default Pokemons;

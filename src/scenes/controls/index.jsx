import { useContext } from "react";
import { Button, Row } from "../../components/common";
import { pokeContext } from "../../contexts/pokeContext";

const Controls = ({ target }) => {
  const { pokemons, setPokemons } = useContext(pokeContext);

  const getNextPokemons = () => {
    const { next, all } = pokemons;
    setPokemons((prev) => ({
      ...prev,
      next: next + 10,
      previous: next,
      results: all.slice(next, next + 10),
    }));
  };

  const getPreviousPokemons = () => {
    const { previous, all } = pokemons;
    setPokemons((prev) => ({
      ...prev,
      next: previous,
      previous: previous - 10,
      results: all.slice(previous - 10, previous),
    }));
  };

  if (!pokemons) {
    return null;
  }

  return (
    <Row
      width={"100vw"}
      align="space-between"
      style={{
        marginTop: "32px",
      }}
    >
      <Button onClick={getPreviousPokemons} disabled={!pokemons.previous}>
        <i class="fa-solid fa-chevron-left"></i> Previous
      </Button>
      <Button onClick={getNextPokemons} disabled={!pokemons.next}>
        Next <i class="fa-solid fa-chevron-right"></i>
      </Button>
    </Row>
  );
};

export default Controls;

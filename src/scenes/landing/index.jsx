import Layout from "../../components/layout";
import logo from "../../assets/svg/logo.svg";
import {
  LandingContainer,
  LeftSide,
  Logo,
  PokeImage,
  PokeName,
  RightSide,
} from "./components";
import api from "./../../services/api";
import { useEffect, useState } from "react";
import colors, { createGradient } from "./../../constants/colors";
import { Button, Row, TypeIcon } from "../../components/common";

const LandingPage = () => {
  const [pokemon, setPokemon] = useState({});
  const [data, setData] = useState({
    images: [],
    color: null,
    pokeImage: null,
  });

  const getRandomPokemon = async () => {
    const pokemon = await api.getRandomPokemon();
    if (pokemon) {
      setPokemon(pokemon);
      const pokeType = pokemon?.types.find((x) => {
        return x.slot === 1;
      });

      if (pokeType) {
        setData((prev) => ({
          ...prev,
          pokeImage: pokemon?.sprites?.other["official-artwork"]?.front_default,
          color: colors.types[pokeType.type.name],
        }));
      }
    }
  };

  useEffect(() => {
    getRandomPokemon();
  }, []);

  return (
    <Layout>
      <Logo src={logo} />
      <LandingContainer background={() => createGradient(data.color)}>
        <LeftSide>
          <PokeName>
            {pokemon?.name &&
              pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}
          </PokeName>
          <Row
            gap="8px"
            style={{
              marginTop: "16px",
            }}
          >
            {pokemon?.types?.map((type) => (
              <TypeIcon
                key={type.slot}
                src={require(`../../assets/img/types/bug.png`).def}
                alt={type.type.name}
                width={"30px"}
              />
            ))}
          </Row>
          <Button>Saber Mais</Button>
        </LeftSide>
        <RightSide>
          <PokeImage src={data.pokeImage} loading="lazy" draggable="false" />
        </RightSide>
      </LandingContainer>
    </Layout>
  );
};

export default LandingPage;

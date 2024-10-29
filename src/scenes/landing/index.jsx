import {
  LandingContainer,
  LeftSide,
  PokeImage,
  PokeName,
  RightSide,
} from "./components";
import api from "./../../services/api";
import { useEffect, useState } from "react";
import colors, { createGradient } from "./../../constants/colors";
import {
  Row,
  TypeMarker,
  Column,
  AudioPlayer,
  Button,
} from "../../components/common";
import icons from "../../constants/icons";
import { PageContainer } from "../pokemons/components";
import GraphData from "./../../components/graphData/index";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const LandingPage = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [pokemon, setPokemon] = useState({});
  const [data, setData] = useState({
    color: null,
    pokeImage: null,
    audio: null,
  });

  const getRandomPokemon = async () => {
    const pokemon = await api.getRandomPokemon();
    if (pokemon) {
      setPokemon(pokemon);
      const pokeType = pokemon?.types?.find((x) => {
        return x.slot === 1;
      });

      if (pokeType) {
        setData((prev) => ({
          ...prev,
          pokeImage: pokemon?.sprites?.other["official-artwork"]?.front_default,
          color: colors.types[pokeType.type.name],
          audio: pokemon?.cries?.latest,
        }));
      }
    }
  };

  const playAudio = () => {
    const audio = new Audio(data.audio);
    audio.play();
  };

  useEffect(() => {
    getRandomPokemon();
  }, []);

  return (
    <PageContainer>
      <LandingContainer
        background={() => createGradient(data.color)}
        style={{
          flexDirection: desktop ? "row" : "column-reverse",
        }}
      >
        <LeftSide>
          <PokeName>
            {pokemon?.name &&
              pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}
          </PokeName>
          <Row gap="8px">
            {pokemon?.types?.map((type) => (
              <TypeMarker
                key={type.slot}
                bg={colors.types[type.type.name]}
                rounded
              >
                <img src={icons[type.type.name]} alt={type.type.name} />
              </TypeMarker>
            ))}
          </Row>
          {pokemon?.stats && (
            <Column width={desktop ? "50%" : "100%"} align={"flex-start"}>
              <GraphData
                icon="heart-pulse"
                value={pokemon?.stats[0]?.base_stat}
              />
              <GraphData
                icon={"hand-fist"}
                value={pokemon?.stats[1].base_stat}
              />
              <GraphData
                icon={"shield-halved"}
                value={pokemon?.stats[2].base_stat}
              />
              <GraphData icon={"khanda"} value={pokemon?.stats[3].base_stat} />
              <GraphData
                icon={"shield-heart"}
                value={pokemon?.stats[4].base_stat}
              />
              <GraphData
                icon={"gauge-high"}
                value={pokemon?.stats[5].base_stat}
              />
            </Column>
          )}
          <Row width={"50%"} gap={"8px"} justify={"flex-start"}>
            <AudioPlayer onClick={playAudio}>
              <i className="fa-solid fa-play"></i>
            </AudioPlayer>
            Play Cry
          </Row>

          <Button onClick={getRandomPokemon}>Get Another Pokemon</Button>
        </LeftSide>
        <RightSide>
          <PokeImage src={data.pokeImage} loading="lazy" draggable="false" />
        </RightSide>
      </LandingContainer>
    </PageContainer>
  );
};

export default LandingPage;

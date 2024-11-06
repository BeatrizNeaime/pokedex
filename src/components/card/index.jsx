import colors, { createGradient } from "../../constants/colors";
import { useContext, useEffect, useState } from "react";
import pokeApi from "../../services/pokeApi";
import { Row, PokeProfile, Name, TypeMarker } from "../common";
import Stats from "../stats";
import { modalContext } from "../../contexts/modalContext";
import icons from "../../constants/icons";
import { loadingContext } from "../../contexts/loadingContext";
import Loading from "../loading";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { pokeContext } from "../../contexts/pokeContext";
import { Card } from "./components";
import pokeball from "../../assets/img/pokeball.png";

const PokeCard = ({ data }) => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const { setModal, setData } = useContext(modalContext);
  const { loading, setLoading } = useContext(loadingContext);
  const { pokemons } = useContext(pokeContext);
  const [pokeData, setPokeData] = useState();

  const [aux, setAux] = useState({
    color: null,
    image: [],
  });

  const verifyCapture = async (name) => {
    const captured = pokemons.captured.find((x) => x.pokemonName === name);
    if (captured) {
      return {
        captured: true,
        username: captured.user.username,
        capturedAt: captured.capturedAt,
      };
    }
  };

  const getPokemon = async () => {
    setLoading(true);
    try {
      const response = await pokeApi.getPokemon(data.url);
      if (response) {
        const captured = await verifyCapture(response.name);
        setPokeData((prev) => ({ ...prev, ...response, captured: captured }));
        const pokeType = response?.types?.find((x) => x.slot === 1);
        setAux((prev) => ({
          ...prev,
          color: colors.types[pokeType?.type?.name],
        }));
      } else {
        return;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    setData(pokeData);
    setModal(true);
  };

  useEffect(() => {
    getPokemon();
  }, [data.url]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Card
      bg={createGradient(aux.color, colors.blue[900])}
      onClick={handleClick}
    >
      {pokeData?.captured && (
        <img
          src={pokeball}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "20px",
            height: "20px",
          }}
        />
      )}

      <PokeProfile
        src={pokeData?.sprites?.other?.["official-artwork"]?.front_default}
        style={{
          top: desktop ? "-60%" : "",
        }}
      />
      <Name> ● {data?.name?.replaceAll("-", " ")} ● </Name>

      <Row
        width={"100%"}
        style={{
          marginTop: "10px",
        }}
      >
        {pokeData?.types?.map((type) => (
          <TypeMarker key={type.slot} bg={colors.types[type.type.name]}>
            <img src={icons[type.type.name]} /> {type.type.name}
          </TypeMarker>
        ))}
      </Row>

      <Row
        justify={"space-evenly"}
        gap={"16px"}
        width={"100%"}
        style={{
          marginTop: "15px",
        }}
      >
        <Stats
          icon={"ruler"}
          name={"Altura"}
          value={pokeData?.height}
          unit={"m"}
        />
        <Stats
          icon={"weight"}
          name={"Peso"}
          value={pokeData?.weight}
          unit={"Kg"}
        />
      </Row>
    </Card>
  );
};

export default PokeCard;

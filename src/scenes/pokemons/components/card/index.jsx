import colors, { createGradient } from "../../../../constants/colors";
import { Card } from "./components";
import { useContext, useEffect, useState } from "react";
import api from "./../../../../services/api";
import {
  Row,
  PokeProfile,
  Name,
  TypeMarker,
} from "../../../../components/common";
import Stats from "./components/Stats";
import { modalContext } from "../../../../contexts/modalContext";
import icons from "../../../../constants/icons";
import { loadingContext } from "../../../../contexts/loadingContext";
import Loading from "../../../../components/loading";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

const PokeCard = ({ data }) => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const { setModal, setData } = useContext(modalContext);
  const { loading, setLoading } = useContext(loadingContext);
  const [pokeData, setPokeData] = useState();

  const [aux, setAux] = useState({
    color: null,
    image: [],
  });

  const getPokemon = async () => {
    setLoading(true);
    try {
      const response = await api.getPokemon(data.url);
      if (response) {
        setPokeData(response);
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

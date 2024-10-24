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

const PokeCard = ({ data }) => {
  const { setModal, setData } = useContext(modalContext);

  const [pokeData, setPokeData] = useState();

  const [aux, setAux] = useState({
    color: null,
    image: [],
  });

  const getPokemonById = async () => {
    const response = await api.getPokemonById(data.url.split("/")[6]);
    if (response) {
      setPokeData(response);
      const pokeType = response?.types.find((x) => {
        return x.slot === 1;
      });

      setAux((prev) => {
        return {
          ...prev,
          color: colors.types[pokeType.type.name],
        };
      });
    }
  };

  const handleClick = () => {
    setData(pokeData);
    setModal(true);
  };

  useEffect(() => {
    getPokemonById();
  }, []);

  return (
    <Card
      bg={() => createGradient(aux.color, colors.blue[900])}
      onClick={handleClick}
    >
      <PokeProfile
        src={pokeData?.sprites?.other?.["official-artwork"]?.front_default}
        style={{
          top: "-60%",
        }}
      />
      <Name> ● {data.name} ● </Name>

      <Row
        width={"100%"}
        style={{
          marginTop: "10px",
        }}
      >
        {pokeData?.types?.map((type) => (
          <TypeMarker key={type.slot} bg={colors.types[type.type.name]}>
            {type.type.name}
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

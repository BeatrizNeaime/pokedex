import { ModalContainer, Overlay, PhysioData } from "./components";
import colors, { createGradient } from "./../../constants/colors";
import { Column, Name, PokeProfile, Row, TypeMarker } from "../common";
import Stats from "./../../scenes/pokemons/components/card/components/Stats";
import GraphData from "./components/graphData";
import { useContext, useEffect, useState } from "react";
import { modalContext } from "../../contexts/modalContext";
import types from "./../../constants/types";

const PokeModal = () => {
  const { modal, data, setModal } = useContext(modalContext);
  const [weakness, setWeakness] = useState([]);

  const getWeakness = () => {
    data.types.forEach((element) => {
      setWeakness((prev) => [...prev, types[element.type.name].weakness]);
    });

    weakness.filter((x) => {
      console.log(x);
    });
  };

  useEffect(() => {
    getWeakness();
  }, []);

  if (!modal) return null;

  return (
    <Overlay
      onClick={() => {
        setModal(false);
      }}
    >
      <ModalContainer
        bg={() => () => createGradient(colors.types.dragon, colors.blue[900])}
      >
        <PokeProfile
          src={data?.sprites?.other?.["official-artwork"]?.front_default}
        />
        <Name>● {data.name} ●</Name>

        <PhysioData>
          <Stats
            icon={"ruler"}
            name={"Altura"}
            value={data?.height}
            unit={"m"}
          />
          <Row>
            {data?.types.map((item) => {
              return (
                <TypeMarker
                  key={item.slot}
                  bg={colors.types[item.type.name]}
                  style={{
                    fontSize: "12px",
                  }}
                >
                  {item.type.name}
                </TypeMarker>
              );
            })}
          </Row>
          <Stats
            icon={"weight"}
            name={"Peso"}
            value={data?.weight}
            unit={"Kg"}
          />
        </PhysioData>
        <Column width={"100%"} justify={"flex-end"}>
          <GraphData
            icon={"heart-pulse"}
            value={data?.stats[0].base_stat}
            maxValue={"100"}
          />
          <GraphData
            icon={"hand-fist"}
            value={data?.stats[1].base_stat}
            maxValue={"100"}
          />
          <GraphData
            icon={"shield-halved"}
            value={data?.stats[2].base_stat}
            maxValue={"100"}
          />
          <GraphData
            icon={"khanda"}
            value={data?.stats[3].base_stat}
            maxValue={"100"}
          />
          <GraphData
            icon={"shield-heart"}
            value={data?.stats[4].base_stat}
            maxValue={"100"}
          />
          <GraphData
            icon={"gauge-high"}
            value={data?.stats[5].base_stat}
            maxValue={"100"}
          />
        </Column>

        <Column width={"100%"} align={"flex-start"}>
          <h2>Fraquezas:</h2>
          <Row></Row>
        </Column>
      </ModalContainer>
    </Overlay>
  );
};

export default PokeModal;

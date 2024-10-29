import { ModalContainer, Overlay, PhysioData } from "./components";
import colors, { createGradient } from "./../../constants/colors";
import {
  Column,
  Name,
  PokeProfile,
  Row,
  StatsTitle,
  TypeMarker,
  PokeCode,
} from "../common";
import Stats from "./../../scenes/pokemons/components/card/components/Stats";
import GraphData from "./components/graphData";
import { useContext, useEffect, useState } from "react";
import { modalContext } from "../../contexts/modalContext";
import icons from "../../constants/icons";

const PokeModal = () => {
  const { modal, data, setModal } = useContext(modalContext);
  const [weakness, setWeakness] = useState([]);

  const formatOrder = (order) => {
    if (order < 10) {
      return `00${order}`;
    } else if (order < 100) {
      return `0${order}`;
    } else {
      return order;
    }
  };

  const getWeakness = () => {
    if (data) {
      data?.types?.forEach((element) => {
        console.log(element);
      });

      return weakness;
    }
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
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <PokeProfile
          src={data?.sprites?.other?.["official-artwork"]?.front_default}
        />
        <Name marginTop={"20%"}>● {data.name} ●</Name>
        <PokeCode>#{formatOrder(data?.order)}</PokeCode>

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
                  key={item.type.slot}
                  bg={colors.types[item.type.name]}
                  rounded={true}
                >
                  <img src={icons[item.type.name]} />
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

        <Column width={"95%"} justify={"flex-end"} gap={"16px"}>
          <Row width={"100%"} align={"flex-start"}>
            <Column width={"50%"} align={"flex-start"}>
              <StatsTitle>
                <i class="fa-solid fa-chart-simple"></i> Base Stats
              </StatsTitle>
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

            <Column width={"50%"} gap={"16px"} height={"100%"}>
              <Column width={"100%"} align={"flex-start"}>
                <StatsTitle>
                  <i class="fa-solid fa-star"></i> Abilities
                </StatsTitle>
                <Row
                  width={"100%"}
                  justify={"flex-start"}
                  gap={"8px"}
                  style={{
                    flexWrap: "wrap",
                  }}
                >
                  {data?.abilities.map((item) => {
                    return (
                      <Row gap={"4px"}>
                        <i
                          class="fa-regular fa-circle"
                          style={{
                            color: colors.gray[400],
                            fontSize: "8px",
                          }}
                        ></i>
                        <p>{item.ability.name}</p>
                      </Row>
                    );
                  })}
                </Row>
              </Column>
              <Column width={"100%"} align={"space-between"} gap={"8px"}>
                <StatsTitle>
                  <i class="fa-solid fa-volume-high"></i> Sound
                </StatsTitle>
                <audio
                  controls
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "6px",
                    background: colors.gray[900],
                    border: "none",
                  }}
                >
                  <source src={data?.cries?.latest} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </Column>
            </Column>
          </Row>

          <Column width={"100%"} align={"flex-start"}>
            <StatsTitle>
              <i class="fa-solid fa-circle-radiation"></i> Weaknesses
            </StatsTitle>
            <Row></Row>
          </Column>
        </Column>
      </ModalContainer>
    </Overlay>
  );
};

export default PokeModal;
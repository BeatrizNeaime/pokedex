import styled from "styled-components";
import { Button, Row } from "../common";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Player = styled(Button)`
  border-radius: 50%;
  padding: 8px;
  width: 45px;
`;

const AudioPlayer = ({ audio }) => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const playAudio = () => {
    const audio = new Audio(audio);
    audio.play();
  };

  return (
    <Row width={desktop ? "50%" : "100%"} gap={"8px"} justify={"flex-start"}>
      <Player onClick={playAudio}>
        <i className="fa-solid fa-play"></i>
      </Player>
      Play Cry
    </Row>
  );
};

export default AudioPlayer;

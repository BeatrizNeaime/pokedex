import styled from "styled-components";
import colors from "../../../constants/colors";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 1.6rem);
  margin-top: 1.05rem;
  background: ${(props) => props.background ?? colors.black};
  width: 100vw;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  order: 1;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const RightSide = styled(LeftSide)`
  order: 2;
  width: 40%;
`;

const PokeImage = styled.img`
  overflow-clip-margin: content-box;
  overflow: clip;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  vertical-align: middle;
  image-rendering: crisp-edges;
  filter: drop-shadow(5px 50px 15px rgba(0, 0, 0, 0.3));
`;

const PokeName = styled.h1`
  color: white;
  font-size: 60px;
`;

const PokeBall = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 9999999999;
  width: 200px;
  transform: translateX(-50%);
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export { LandingContainer, LeftSide, RightSide, PokeImage, PokeName, PokeBall };

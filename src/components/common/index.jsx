import styled from "styled-components";
import colors from "../../constants/colors";

const Logo = styled.img`
  height: 100px;
  position: absolute;
  top: 1rem;
  align-self: center;
  justify-self: center;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.align ?? "center"};
  justify-content: ${(props) => props.justify ?? "space-evenly"};
  gap: ${(props) => props.gap ?? "0"};
  width: ${(props) => props.width ?? "100%"};
`;

const Column = styled(Row)`
  flex-direction: column;
  width: ${(props) => props.width ?? "auto"};
`;

const Button = styled.button`
  background: ${colors.blue[600]};
  border-radius: 6px;
  border: none;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  position: relative;
  gap: 8px;

  &:hover {
    background: ${colors.blue[600]};
  }

  &:active {
    background: ${colors.blue[700]};
  }

  &:disabled {
    background: ${colors.gray[400]};
    cursor: not-allowed;
  }
`;

const PokeProfile = styled.img`
  position: absolute;
  transform: scale(0.5);
  top: -50%;

  @media (max-width: 768px) {
    transform: scale(0.4);
    top: -100%;
  }

  @media (max-width: 415px) {
    transform: scale(0.4);
    top: -100%;
  }
`;

const Name = styled.h2`
  color: white;
  font-size: 30px;
  text-transform: capitalize;
  text-align: center;
  margin-top: ${(props) => props.marginTop ?? "30%"};
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
`;

const TypeMarker = styled.div`
  background: ${(props) => props.bg};
  color: white;
  border-radius: ${(props) => (props.rounded ? "50%" : "6px")};
  padding: 8px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-transform: uppercase;
  font-weight: 600;

  img {
    width: ${(props) => props.width ?? "20px"};
    height: ${(props) => props.height ?? "20px"};
  }
`;

const OutlinedBtn = styled.button`
  background: transparent;
  border: 1px solid ${(props) => props.border ?? "white"};
  border-radius: 6px;
  height: 45px;
  color: ${(props) => props.color ?? "white"};
  padding: 0 16px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.border ?? "white"};
    color: ${(props) => props.color ?? "black"};
  }
`;

const StatsTitle = styled.h2`
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const PokeCode = styled.p`
  color: ${colors.gray[400]};
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const Overlay = styled.div`
  background: rgb(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999999999;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export {
  Row,
  Button,
  Column,
  PokeProfile,
  Name,
  Logo,
  TypeMarker,
  StatsTitle,
  PokeCode,
  OutlinedBtn,
  Overlay,
};

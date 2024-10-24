import styled from "styled-components";
import colors from "../../constants/colors";

const Logo = styled.img`
  height: 100px;
  position: absolute;
  top: 1rem;
  align-self: center;
  justify-self: center;

  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justify ?? "space-evenly"};
  gap: ${(props) => props.gap ?? "0"};
  width: ${(props) => props.width ?? ""};
`;

const Column = styled(Row)`
  flex-direction: column;
`;

const Button = styled.button`
  background: ${colors.blue[900]};
  border-radius: 6px;
  border: none;
  color: white;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background: ${colors.blue[600]};
  }
`;

const PokeProfile = styled.img`
  position: absolute;
  transform: scale(0.5);
  top: -50%;
`;

const Name = styled.h2`
  color: white;
  font-size: 30px;
  text-transform: capitalize;
  text-align: center;
  margin-top: 30%;
`;

const TypeMarker = styled.div`
  background: ${(props) => props.bg};
  color: white;
  border-radius: 6px;
  padding: 4px 8px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-transform: uppercase;
  font-weight: 600;
`;

export { Row, Button, Column, PokeProfile, Name, Logo, TypeMarker };

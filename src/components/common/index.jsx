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
  align-items: ${(props) => props.align ?? "center"};
  justify-content: ${(props) => props.justify ?? "space-evenly"};
  gap: ${(props) => props.gap ?? "0"};
  width: ${(props) => props.width ?? ""};
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
`;

const Name = styled.h2`
  color: white;
  font-size: 30px;
  text-transform: capitalize;
  text-align: center;
  margin-top: ${(props) => props.marginTop ?? "30%"};
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
    width: 20px;
    height: 20px;
  }
`;

const StatsTitle = styled.h2`
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const PokeCode = styled.p`
  color: ${colors.gray[400]};
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 8px;
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
};

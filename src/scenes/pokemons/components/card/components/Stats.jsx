import styled from "styled-components";
import { Column } from "../../../../../components/common";

const StatsName = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
`;

const StatsValue = styled.h2`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

const Stats = ({ name, icon, value, unit }) => {
  const val = parseFloat(value) / 10;

  return (
    <Column>
      <StatsValue>
        {unit === "m" ? val : value} {unit}
      </StatsValue>
      <StatsName>
        <i className={`fa-solid fa-${icon}`}></i>
        {name}
      </StatsName>
    </Column>
  );
};

export default Stats;

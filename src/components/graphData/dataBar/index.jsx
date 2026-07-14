import styled from "styled-components";
import { useEffect, useState } from "react";
import colors from "../../../constants/colors";

const BarContainer = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${colors.black};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  padding: 2px;
  border: 1px solid #1a1a1a;
`;

const Bar = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  border-radius: 10px;
  transition: width 0.5s ease;
  background-color: ${(props) => props.color};

  @keyframes width {
    from {
      width: 0;
    }
    to {
      width: ${(props) => props.width};
    }
  }
`;

const DataBar = ({ value }) => {
  const [data, setData] = useState({
    percentage: 0,
    color: "#bbb",
  });

  useEffect(() => {
    const result = (value / 200) * 100;

    let color = "#ff0000";

    if (result > 60) {
      color = "#00ff00";
    } else if (result > 30) {
      color = "#fffa50";
    }

    setData({
      percentage: result,
      color,
    });
  }, [value]);

  return (
    <BarContainer>
      <Bar width={`${data.percentage}%`} color={data.color} />
    </BarContainer>
  );
};

export default DataBar;

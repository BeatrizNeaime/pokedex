import { Row } from "../../../common";
import DataBar from "./dataBar";

const GraphData = ({ icon, value, maxValue }) => {
  return (
    <Row
      gap={"8px"}
      width={"90%"}
      justify={"flex-end"}
      style={{
        margin: "8px 0",
      }}
    >
      <i className={`fa-solid fa-${icon}`}></i>
      <p>{value}</p>

      <DataBar currentValue={value} maxValue={maxValue} />
    </Row>
  );
};

export default GraphData;

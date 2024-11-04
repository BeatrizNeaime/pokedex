import colors from "../../../../constants/colors";
import { Row } from "../../../common";
import pokeball from "../../../../assets/img/pokeball.png";

const CapturedInfo = ({ name, date }) => {
  return (
    <Row
      width={"max-content"}
      align={"flex-start"}
      style={{
        backgroundColor: colors.blue[900],
        padding: "8px",
        borderRadius: "8px",
        marginBottom: "16px",
        alignSelf: "flex-start",
      }}
    >
      <img src={pokeball} height={"18px"} />
      <p style={{ marginLeft: "8px" }}>
        Captured by <b>{name}</b> on {new Date(date).toLocaleDateString()}
      </p>
    </Row>
  );
};

export default CapturedInfo;

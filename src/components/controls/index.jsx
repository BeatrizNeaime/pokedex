import { Button, Row } from "../common";
import api from "../../services/api";

const Controls = ({ data, setData }) => {
  const handleCardClick = async (url) => {
    window.scrollTo(0, "20%");
    const res = await api.getPokemon(url);
    setData(res);
  };

  if (!data) {
    return null;
  }

  return (
    <Row
      width={"100vw"}
      align="space-between"
      style={{
        marginTop: "32px",
      }}
    >
      <Button
        onClick={async () => await handleCardClick(data.previous)}
        disabled={!data.previous}
      >
        <i class="fa-solid fa-chevron-left"></i> Previous
      </Button>
      <Button
        onClick={async () => await handleCardClick(data.next)}
        disabled={!data.next}
      >
        Next <i class="fa-solid fa-chevron-right"></i>
      </Button>
    </Row>
  );
};

export default Controls;

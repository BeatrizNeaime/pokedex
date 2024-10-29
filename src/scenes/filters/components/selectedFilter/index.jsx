import { useContext } from "react";
import { Button } from "../../../../components/common";
import { filterContext } from "../../../../contexts/filterContext";

const SelectedFilter = ({ name, type }) => {
  const { setFilters } = useContext(filterContext);

  const handleRemove = () => {
    setFilters((prev) => ({
      ...prev,
      [type]: "",
    }));
  };

  return (
    <Button
      style={{
        gap: "8px",
      }}
    >
      {name}
      <span onClick={handleRemove}>
        <i className={`fas fa-times`} />
      </span>
    </Button>
  );
};

export default SelectedFilter;

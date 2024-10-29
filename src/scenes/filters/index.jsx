import { useContext } from "react";
import { Button, Column, Row, StatsTitle } from "../../components/common";
import types from "../../constants/types";
import TypesDropdown from "./components/dropdown/types";
import Search from "./components/search";
import { filterContext } from "../../contexts/filterContext";
import { habitats } from "../../constants/habitats";
import HabitatsDropdown from "./components/dropdown/habitats";
import SelectedFilter from "./components/selectedFilter";
import api from "./../../services/api";

const Filters = ({ setData }) => {
  const { filters } = useContext(filterContext);

  const handleClick = async () => {
    const res = await api.getFilteredPokemons(filters, 0);
    console.log(res);
  };

  return (
    <Column width={"100%"} gap={"32px"}>
      <Row width={"95%"} gap={"8px"}>
        <HabitatsDropdown name={"Habitats"} data={habitats} />
        <TypesDropdown name={"Types"} data={types} />
        <Search setData={setData} />
        <Button
          style={{
            height: "45px",
            width: "10%",
          }}
          onClick={handleClick}
        >
          <i className="fa fa-search"></i>
        </Button>
      </Row>

      {(filters.type || filters.habitat) && (
        <Column width={"90%"} gap={"8px"} align={"flex-start"}>
          <StatsTitle>
            <i className="fas fa-filter"></i> Filters
          </StatsTitle>
          <Row gap={"8px"}>
            {filters.type && (
              <SelectedFilter name={filters.type} type={"type"} />
            )}
            {filters.habitat && (
              <SelectedFilter name={filters.habitat} type={"habitat"} />
            )}
          </Row>
        </Column>
      )}
    </Column>
  );
};

export default Filters;

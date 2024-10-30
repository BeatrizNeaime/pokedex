import { useContext } from "react";
import {
  Button,
  Column,
  OutlinedBtn,
  Row,
  StatsTitle,
} from "../../components/common";
import types from "../../constants/types";
import TypesDropdown from "./components/dropdown/types";
import Search from "./components/search";
import { filterContext } from "../../contexts/filterContext";
import { habitats } from "../../constants/habitats";
import HabitatsDropdown from "./components/dropdown/habitats";
import SelectedFilter from "./components/selectedFilter";
import api from "./../../services/api";
import { pokeContext } from "../../contexts/pokeContext";
import { loadingContext } from "./../../contexts/loadingContext";

const Filters = () => {
  const { filters, setFilters } = useContext(filterContext);
  const { pokemons, setPokemons, getData } = useContext(pokeContext);
  const { setLoading } = useContext(loadingContext);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await api.getFilteredPokemons(filters, 0, pokemons.all);
      console.log(res);
      if (res.results.length > 0) {
        setPokemons({
          all: res.all,
          results: res.results.slice(0, 10),
          offset: 10,
          count: res.results.length,
          next: res.next,
          previous: res.previous,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearFilters = () => {
    getData();
    setFilters({
      type: null,
      habitat: null,
      name: null,
    });
    return;
  };

  return (
    <Column width={"100%"} gap={"32px"}>
      <Row width={"95%"} gap={"8px"}>
        <HabitatsDropdown name={"Habitats"} data={habitats} />
        <TypesDropdown name={"Types"} data={types} />
        <Search />
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
          <Row width={"100%"} justify={"space-between"}>
            <Row gap={"8px"}>
              {filters.type && (
                <SelectedFilter name={filters.type} type={"type"} />
              )}
              {filters.habitat && (
                <SelectedFilter name={filters.habitat} type={"habitat"} />
              )}
            </Row>
            <OutlinedBtn
              style={{
                opacity: 0.8,
              }}
              onClick={handleClearFilters}
            >
              Clear Filters
            </OutlinedBtn>
          </Row>
        </Column>
      )}
    </Column>
  );
};

export default Filters;

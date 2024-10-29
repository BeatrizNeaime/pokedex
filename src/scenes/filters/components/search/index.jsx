import { useContext } from "react";
import { Row } from "../../../../components/common";
import { Input, InputContainer } from "./components";
import { filterContext } from "./../../../../contexts/filterContext";

const Search = ({ setData }) => {
  const { filters, setFilters } = useContext(filterContext);

  const handleChange = (e) => {
    setFilters({ ...filters, name: e.target.value });
  };

  const clearSearch = () => {
    setFilters({ ...filters, name: "" });
  };

  return (
    <Row width={"50%"} gap={"8px"}>
      <InputContainer>
        <Input
          type="text"
          placeholder="Search"
          width={"90%"}
          value={filters.name}
          onChange={handleChange}
        />
        {filters.name && (
          <i class="fa-solid fa-circle-xmark" onClick={clearSearch}></i>
        )}
      </InputContainer>
    </Row>
  );
};

export default Search;

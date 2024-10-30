import { useContext, useEffect, useRef } from "react";
import { Row } from "../../../../components/common";
import { Input, InputContainer } from "./components";
import { filterContext } from "./../../../../contexts/filterContext";
import { pokeContext } from "../../../../contexts/pokeContext";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

const Search = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const { filters, setFilters } = useContext(filterContext);
  const { getData } = useContext(pokeContext);
  const nameRef = useRef(null);

  const handleBlur = () => {
    setFilters({ ...filters, name: nameRef.current.value });
  };

  const clearSearch = () => {
    setFilters({ ...filters, name: null });
    nameRef.current.value = "";
  };

  useEffect(() => {
    if (!filters.name) {
      nameRef.current.value = null;
    }
  }, [filters.name]);

  return (
    <Row width={desktop ? "50%" : "100%"} gap={"8px"}>
      <InputContainer>
        <Input
          type="text"
          placeholder="Search"
          width={"90%"}
          ref={nameRef}
          onBlur={handleBlur}
        />
        {filters.name && (
          <i class="fa-solid fa-circle-xmark" onClick={clearSearch}></i>
        )}
      </InputContainer>
    </Row>
  );
};

export default Search;

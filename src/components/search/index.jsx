import { Row } from "../common";
import { Input } from "./components";

const Search = () => {
  return (
    <Row width={"50%"}>
      <Input type="text" placeholder="Search" />
    </Row>
  );
};

export default Search;

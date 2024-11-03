import { PageContainer } from "../../scenes/pokemons/components";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { PageTitle, Row } from "../../components/common";

const AccountPage = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");

  return (
    <PageContainer
      style={{
        marginTop: desktop ? "" : "25%",
      }}
    >
      <Row width={"95%"} justify={"flex-start"}>
        <PageTitle>My PokéAccount</PageTitle>
      </Row>
    </PageContainer>
  );
};

export default AccountPage;

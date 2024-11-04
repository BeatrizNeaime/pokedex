import { PageContainer } from "../../scenes/pokemons/components";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Column, PageTitle, Row } from "../../components/common";
import PersonalInfo from "./components/personalInfo";
import colors from "../../constants/colors";

const AccountPage = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");

  return (
    <PageContainer
      style={{
        marginTop: desktop ? "" : "25%",
      }}
    >
      <Column width={"95%"} gap={"32px"}>
        <Row width={"100%"} justify={"flex-start"}>
          <PageTitle>My PokéAccount</PageTitle>
        </Row>

        <Column width={"100%"} gap={"16px"}>
          <Row width={"100%"} justify={"flex-start"}>
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: colors.types.ground,
                textDecorationThickness: "2px",
              }}
            >
              Personal Information
            </h2>
          </Row>

          <Row
            width={"100%"}
            justify={"flex-start"}
            gap={"32px"}
            style={{
              flexWrap: "wrap",
            }}
          >
            <PersonalInfo title={"Name"} value={"Ash Ketchum"} />
            <PersonalInfo title={"Username"} value={"Ash123"} />
            <PersonalInfo title={"Pokémons Captured"} value={"3"} />
          </Row>
        </Column>
        <Column width={"100%"} gap={"16px"}>
          <Row width={"100%"} justify={"flex-start"}>
            <h2>My Pokémons</h2>
          </Row>

          <Row width={"100%"} justify={"flex-start"}></Row>
        </Column>
      </Column>
    </PageContainer>
  );
};

export default AccountPage;

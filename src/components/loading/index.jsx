import { PageContainer } from "../../scenes/pokemons/components";
import pokeball from "../../assets/img/pokeball.png";
import styled from "styled-components";
import { useContext } from "react";
import { loadingContext } from "../../contexts/loadingContext";

const LoadingImage = styled.img`
  animation: rotate 5s infinite linear;
  width: 100px;
  height: 100px;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  const { loading } = useContext(loadingContext);

  if (!loading) return null;

  return (
    <PageContainer
      style={{
        minHeight: "20vh",
      }}
    >
      <LoadingImage src={pokeball} alt="loading" />
    </PageContainer>
  );
};

export default Loading;

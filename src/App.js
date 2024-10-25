import GlobalStyle from './GlobalStyle';
import Pokemons from "./scenes/pokemons";
import logo from "./assets/svg/logo.svg"
import { Logo, Row } from './components/common';
import Layout from './components/layout';
import { ModalContextProvider } from './contexts/modalContext';
import PokeModal from './components/modal';
import { useEffect, useState } from 'react';
import api from './services/api';
import Search from './components/search';

function App() {
  const [pokeData, setPokeData] = useState({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  const getData = async () => {
    const res = await api.getPaginatedPokemons();
    setPokeData(res);
  }

  useEffect(() => {
    getData();
    console.log(pokeData)
  }, []);

  return (
    <ModalContextProvider>
      <Layout>
        <GlobalStyle />
        <Logo src={logo} />
        <Row
          width={"100%"}
          style={{
            marginTop: "10%"
          }} >
          <Search setPokeData={setPokeData} />
        </Row>
        <Pokemons data={pokeData.results} />
        <PokeModal />
      </Layout>
    </ModalContextProvider>
  );
}

export default App;

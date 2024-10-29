import GlobalStyle from './GlobalStyle';
import logo from "./assets/svg/logo.svg"
import { Logo } from './components/common';
import Layout from './components/layout';
import PokeModal from './components/modal';
import { useEffect, useState } from 'react';
import api from './services/api';
import Controls from './components/controls';
import Filters from './scenes/filters';
import Pokemons from './scenes/pokemons';
import LandingPage from './scenes/landing/index';

function App() {
  const [data, setData] = useState({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  const getData = async () => {
    const res = await api.getPaginatedPokemons();
    setData(res);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <GlobalStyle />
      <PokeModal />
      <Logo src={logo} />
      <LandingPage />
      <Filters setData={setData} />
      <Pokemons data={data.results} />
      <Controls data={data} setData={setData} />
    </Layout>
  );
}

export default App;

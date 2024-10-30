import GlobalStyle from './GlobalStyle';
import logo from "./assets/svg/logo.svg"
import { Logo } from './components/common';
import Layout from './components/layout';
import PokeModal from './components/modal';
import { useContext, useEffect, useState } from 'react';
import Filters from './scenes/filters';
import LandingPage from './scenes/landing/index';
import { pokeContext } from './contexts/pokeContext';
import Loading from './components/loading/index';
import Pokemons from './scenes/pokemons/index';
import Controls from './scenes/controls';

function App() {
  const { pokemons } = useContext(pokeContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!pokemons) {
      setLoaded(false)
    } else {
      setLoaded(true)
    }
  }, [pokemons])


  if (!loaded) {
    return (
      <Layout>
        <GlobalStyle />
        <Loading />
      </Layout>
    )
  }

  return (
    <Layout>
      <GlobalStyle />
      <PokeModal />
      <Logo src={logo} />
      <LandingPage />
      <Filters />
      {loaded ? <Pokemons /> : <Loading />}
      <Controls />
    </Layout>
  );

}

export default App;

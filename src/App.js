import GlobalStyle from './GlobalStyle';
import logo from "./assets/svg/logo.svg"
import { Logo } from './components/common';
import Layout from './components/layout';
import PokeModal from './components/modal';
import { useContext, useEffect} from 'react';
import Filters from './scenes/filters';
import LandingPage from './scenes/landing/index';
import { pokeContext } from './contexts/pokeContext';
import Pokemons from './scenes/pokemons/index';
import Controls from './scenes/controls';

function App() {
  const { pokemons } = useContext(pokeContext);

  useEffect(() => {
  }, [])

  return (
    <Layout>
      <GlobalStyle />
      <PokeModal />
      <Logo src={logo} />
      <LandingPage />
      <Filters />
      <Pokemons />
      <Controls />
    </Layout>
  );

}

export default App;

import GlobalStyle from './GlobalStyle';
import logo from "./assets/svg/logo.svg"
import { Logo } from './components/common';
import Layout from './components/layout';
import PokeModal from './components/modal';
import Filters from './scenes/filters';
import LandingPage from './scenes/landing/index';
import Pokemons from './scenes/pokemons/index';
import Controls from './scenes/controls';
import Footer from './scenes/footer';

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <PokeModal />
      <Logo src={logo} />
      <LandingPage />
      <Filters />
      <Pokemons />
      <Controls />
      <Footer />
    </Layout>
  );

}

export default App;

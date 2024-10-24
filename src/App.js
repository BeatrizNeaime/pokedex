import GlobalStyle from './GlobalStyle';
import Pokemons from "./scenes/pokemons";
import logo from "./assets/svg/logo.svg"
import { Logo } from './components/common';
import Layout from './components/layout';
import { ModalContextProvider } from './contexts/modalContext';
import PokeModal from './components/modal';

function App() {

  return (
    <ModalContextProvider>
      <Layout>
        <GlobalStyle />
        <Logo src={logo} />
        <Pokemons />
        <PokeModal />
      </Layout>
    </ModalContextProvider>
  );
}

export default App;

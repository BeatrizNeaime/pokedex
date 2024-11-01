import GlobalStyle from './GlobalStyle';
import Layout from './components/layout';
import PokeModal from './components/modal';
import Filters from './scenes/filters';
import LandingPage from './scenes/landing/index';
import Pokemons from './scenes/pokemons/index';
import Controls from './scenes/controls';
import Footer from './scenes/footer';
import Navbar from './scenes/navbar';
import Account from './scenes/account';

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <PokeModal />
      <Navbar />
      <LandingPage />
      <Filters />
      <Pokemons />
      <Controls />
      <Footer />
      <Account />
    </Layout>
  );

}

export default App;

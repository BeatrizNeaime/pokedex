import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from './GlobalStyle';
import Layout from './components/layout';
import PokeModal from './components/modal';
import Navbar from './scenes/navbar';
import Account from './scenes/account';
import Toast from './components/toast';
import PokeRoutes from "./router/router";

function App() {
  return (
    <Router>
      <Layout>
        <GlobalStyle />
        <PokeModal />
        <Navbar />
        <PokeRoutes />
        
        <Account />
        <Toast />
      </Layout>
    </Router>
  );
}

export default App;

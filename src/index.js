import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalContextProvider } from './contexts/modalContext';
import { FilterContextProvider } from './contexts/filterContext';
import { PokeContextProvider } from './contexts/pokeContext';
import { LoadingContextProvider } from './contexts/loadingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PokeContextProvider>
    <ModalContextProvider>
      <FilterContextProvider>
        <LoadingContextProvider>
          <App />
        </LoadingContextProvider>
      </FilterContextProvider>
    </ModalContextProvider>
  </PokeContextProvider>
);


import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalContextProvider } from './contexts/modalContext';
import { FilterContextProvider } from './contexts/filterContext';
import { PokeContextProvider } from './contexts/pokeContext';
import { LoadingContextProvider } from './contexts/loadingContext';
import { AccountContextProvider } from './contexts/accountContext';
import { ToastContextProvider } from './contexts/toastContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PokeContextProvider>
    <ModalContextProvider>
      <FilterContextProvider>
        <LoadingContextProvider>
          <AccountContextProvider>
            <ToastContextProvider>
              <App />
            </ToastContextProvider>
          </AccountContextProvider>
        </LoadingContextProvider>
      </FilterContextProvider>
    </ModalContextProvider>
  </PokeContextProvider>
);


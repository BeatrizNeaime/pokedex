import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalContextProvider } from './contexts/modalContext';
import { FilterContextProvider } from './contexts/filterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalContextProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </ModalContextProvider>
);


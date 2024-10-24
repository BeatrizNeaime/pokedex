import { createContext, useState } from "react";

export const modalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(null);

  return (
    <modalContext.Provider value={{ modal, setModal, data, setData }}>
      {children}
    </modalContext.Provider>
  );
};

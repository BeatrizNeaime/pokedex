import { createContext, useState } from "react";

export const accountContext = createContext();

export const AccountContextProvider = ({ children }) => {
  const [data, setData] = useState({
    modalOpen: false,
    isLogged: false,
  });

  return (
    <accountContext.Provider value={{ data, setData }}>
      {children}
    </accountContext.Provider>
  );
};

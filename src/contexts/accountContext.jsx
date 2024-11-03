import { createContext, useEffect, useState } from "react";

export const accountContext = createContext();

export const AccountContextProvider = ({ children }) => {
  const [data, setData] = useState({
    modalOpen: false,
    isLogged: false,
    user: {
      id: 0,
      name: null,
      username: null,
      token: null,
    },
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setData((prev) => ({
        ...prev,
        isLogged: true,
        user: {
          id: sessionStorage.getItem("id"),
          name: sessionStorage.getItem("name"),
          username: sessionStorage.getItem("user"),
        },
      }));
    }
  }, []);

  return (
    <accountContext.Provider value={{ data, setData }}>
      {children}
    </accountContext.Provider>
  );
};

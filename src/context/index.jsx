import { createContext } from "react";

export const GlobalContext = createContext(null);

export default function GlobalContextProvider({ children }) {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}

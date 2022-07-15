import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const GlobalContext = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {resultado : 364.9, limpar: false});

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

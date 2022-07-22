import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const GlobalContext = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {resultado : 419.3, limpar: false});

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

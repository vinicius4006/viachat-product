import { createContext, useReducer } from "react";
import { globalState } from "./data";
import { reducer } from "./reducer";
export const GlobalContext = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

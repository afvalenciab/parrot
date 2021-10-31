import React, { useReducer, createContext } from 'react';
import reducer, { initialState } from './reducer';

export const StoreContext = createContext();

export default function Stores({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {React.Children.only(children)}
    </StoreContext.Provider>
  );
}

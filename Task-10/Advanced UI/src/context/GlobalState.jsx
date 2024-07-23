import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  users: []
};

// Create context
export const GlobalContext = createContext(initialState);

// Actions
const ADD_USER = 'ADD_USER';

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
};

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions
  const addUser = (user) => {
    dispatch({ type: ADD_USER, payload: user });
  };

  return (
    <GlobalContext.Provider value={{ users: state.users, addUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

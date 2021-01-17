import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Init state

const initialState = {
  transactions: [
    { id: 1, text: "Book", amount: -15 },
    { id: 2, text: "Gloves", amount: -10.99 },
    { id: 3, text: "Salary", amount: 1000.99 },
    { id: 4, text: "Amazon Prime", amount: 5.99 },
  ],
};

// Create Context

export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

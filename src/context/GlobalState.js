import React, { createContext, useReducer } from "react";

// Init state

const initialState = {
  transactions: [
    { id: 1, text: "Book", amount: -15 },
    { id: 2, text: "Gloves", amount: -10 },
    { id: 3, text: "Netflix", amount: -11 },
    { id: 4, text: "Amazon Prime", amount: -5.99 },
  ],
};

// Create Context

export const GlobalContext = createContext(initialState);

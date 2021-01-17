import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income =
    (amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0) *
      100) /
    100;

  const expense =
    (amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) *
      -1 *
      100) /
    100;
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income} </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense.toFixed(2)}</p>
      </div>
    </div>
  );
};

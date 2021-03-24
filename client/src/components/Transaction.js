import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <>
      {new Date(transaction.createdAt).toLocaleDateString("fr-FR")}
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}
          {Math.abs(transaction.amount)} €
        </span>{" "}
        <button
          onClick={() => deleteTransaction(transaction._id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </>
  );
};

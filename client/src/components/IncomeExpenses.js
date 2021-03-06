import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
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

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  const data = {
    labels: ["Revenu", "Dépense"],
    datasets: [
      {
        label: "RevenuDépense",
        data: [income, expense],
        backgroundColor: ["#2ecc71", "#c0392b"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="inc-exp-container">
        {income > 0 || expense > 0 ? <Pie data={data} /> : ""}
        {/* <div>
          <h4>Income</h4>
          <p className="money plus">{income} </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{expense}</p>
        </div> */}
      </div>
    </>
  );
};

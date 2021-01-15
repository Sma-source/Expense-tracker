import React, { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="mount">
            Amount <br />
            (negative - expense, positive + income)
          </label>
          <input type="number" value={amount} placeholder="Enter a number..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

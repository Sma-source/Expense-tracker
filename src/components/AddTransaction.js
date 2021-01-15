import React from "react";

export const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" name="" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="mount">
            Amount <br />
            (negative - expense, positive + income)
          </label>
          <input type="number" name="" placeholder="Enter a number..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

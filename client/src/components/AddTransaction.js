import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text && amount) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,

        amount: +amount,
      };
      addTransaction(newTransaction);
      setText("");
      setAmount(0);
    }
  };
  return (
    <>
      <h3>Ajouter une transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Intitulé</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ajouter votre texte..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="mount">
            Montant <br />
            (négatif - dépense, positif + revenu)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ajouter un montant..."
          />
        </div>
        <button className="btn">Valider</button>
      </form>
    </>
  );
};

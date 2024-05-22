import React from "react";
import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { v4 as uuidv4 } from "uuid";

function ExpenseForm() {
  const { dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // alert('title ' + title + " amount "+amount);

    const expense = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setAmount("");
    setTitle("");
    // console.log("form submitted");
  };
  return (
    <div>
      <h3 className=" bg-textColor p-2 font-freeman rounded-sm inline-block ml-6 mt-4">
        Add Expenses
      </h3>
      <form onSubmit={onSubmit}>
        <div className="flex flex-  mx-2 mb-4">
          <div className="w-1/3 px-2 mx-2 my-4">
            <input
              type="text"
              placeholder="Title"
              required
              id="title"
              value={title}
              className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 font-freeman"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-1/3 px-2 mx-2 my-4">
            <input
              type="text"
              placeholder="Amount"
              required
              id="amount"
              value={amount}
              className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 font-freeman"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="w-1/3 px-2 mx-2 my-4">
            <button
              className="border border-2-black bg-buttonColor p-2 mt-1 w-full rounded-md text-white font-freeman"
              type="submit"
            >
              Add to Passbook
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;

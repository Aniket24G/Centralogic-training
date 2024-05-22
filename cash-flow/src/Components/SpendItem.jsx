import React from "react";
import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";

const SpendItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const deleteItem = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
    console.log("item deleted");
  };

  return (
    <div key={props.id}>
    <li className="flex justify-between items-center p-4 border-b-2 border-gray-600 font-prompt mx-2">
      {props.title}
      <div className=" w-1/6 flex justify-between font-semibold mr-2 px-2.5 py0.5 rounded border-b border-blue-700">
        <div>{props.amount}</div>
        <div>
          <button onClick={deleteItem}>🗑</button>
        </div>
      </div>
    </li>
    </div>
  );
};

export default SpendItem;

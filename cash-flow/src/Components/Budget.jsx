import React, {useContext} from "react";
import { AppContext } from "../contexts/AppContext";

function Budget() {
  const { budget } = useContext(AppContext);
  return (
    <div className="w-full border border-black-2 p-2 m-auto bg-boxBackground text-white font-montserrat">
      <span>Budget: {budget}</span>
    </div>
  );
}

export default Budget;

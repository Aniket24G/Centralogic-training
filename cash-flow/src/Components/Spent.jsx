import React from 'react';
import { AppContext } from '../contexts/AppContext';
import { useContext } from 'react';

function Spent() {
  const {expenses} = useContext(AppContext);

  const spent = expenses.reduce((total,item) => {
    return (total += item.amount);
  },0);
  return (
    <div className="w-full border border-black-2 p-2 m-auto bg-boxBackground text-white font-montserrat">
      Spent: {spent}
    </div>
  )
}

export default Spent
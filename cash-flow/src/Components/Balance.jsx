import React,{useContext} from 'react'
import { AppContext } from '../contexts/AppContext'

function Balance() {
  const {expenses,budget} = useContext(AppContext);
  const totalExpenses = expenses.reduce((total,item) => {
    return (total = total+item.amount);
  },0)
  return (
    <div className="w-full border border-black-2 p-2 m-auto bg-boxBackground text-white font-montserrat">
      Balance:{budget - totalExpenses}
    </div>
  )
}

export default Balance
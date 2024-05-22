import React, {useContext} from 'react'
import SpendItem from './SpendItem';
import { AppContext } from '../contexts/AppContext';

function Expenses() {
    const { expenses } = useContext(AppContext);
    

  return (
    <div className='w-full mt-3'>
        <div className='m-2 font-freeman flex justify-end'>
        <h4 className='inline-block border border-black-2 bg-textColor p-2 rounded-md'>Passbook</h4>
        </div>
        
        <ul>
            {expenses.map((e) => (
                <SpendItem
                    id={e.id}
                    title={e.title}
                    amount={e.amount}
                />
            ))}
        </ul>
    </div>
  )
}

export default Expenses
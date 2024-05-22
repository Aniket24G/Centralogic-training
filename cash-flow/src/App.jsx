import { React,useState } from "react";
import {Spent,Expenses,Budget,Balance, ExpenseForm,} from './Components/index'
import { AppProvider } from "./contexts/AppContext.jsx";

function App() {
  return (
    <AppProvider>
      <div className="bg-pageBackground min-h-screen w-full text-center m-auto p-2">
        <p className="text-3xl font-montserrat mt-3">Cash-Flow</p>
        <div className="flex flex-wrap mt-3">
          <div className="w-full sm:w-1/3 m-1/2">
            <Budget />
          </div>
          <div className="w-full sm:w-1/3 m-1/2">
            <Balance />
          </div>
          <div className="w-full sm:w-1/3 m-1/2">
            <Spent />
          </div>
        </div>
        <div className="m-auto p-2">
          <Expenses />
        </div>
        <div className="text-left">
          <ExpenseForm />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;

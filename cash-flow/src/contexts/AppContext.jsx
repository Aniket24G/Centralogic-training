import React, { createContext, useId, useReducer } from "react";
import {v4 as uuidv4} from 'uuid';


const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses,action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: [state.expenses.filter(
          (e) => e.id !== action.payload)],
      }
    default:
      return state;
  }
};

const initialState = {
  budget: 1987,
  expenses: [
    {id:uuidv4(),title:"Rent",amount:200},
    {id:uuidv4(),title:"Food",amount:150},
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
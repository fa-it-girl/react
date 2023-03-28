import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{

  function saveExpenseHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
  }
  return <div className="new-expense">
      <ExpenseForm onSaveExpenseHandler = {saveExpenseHandler}/>
  </div>
}

export default NewExpense;

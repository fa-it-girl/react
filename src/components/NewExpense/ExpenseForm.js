import React, {useState} from "react";
import "./ExpenseForm.css"

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("")

  // const [userInput, setUserInput] = useState({enteredTitle: "", enteredAmount: "", enteredDate: ""})

  function titleChangeHandler(event){
    setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
  }


  function amountChangeHandler(event){
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
  }

  function dateChangeHandler(event){
     setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
  }

  function sumbitHandler(event){
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseHandler(expenseData)
    setEnteredAmount('')
    setEnteredDate('')
    setEnteredTitle('')
  }

  return <form onSubmit = {sumbitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>title</label>
        <input type = "text" value = {enteredTitle} onChange = {titleChangeHandler}></input>
      </div>
    </div>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>amount</label>
        <input type = "number" min = "0.01" step= "0.01" value = {enteredAmount} onChange = {amountChangeHandler}></input>
      </div>
    </div>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Date</label>
        <input type = "date" min = "2020-01-01" max = "2023-12-31" value = {enteredDate} onChange = {dateChangeHandler}></input>
      </div>
    </div>
    <div>
      <button type = "submit">Add expense</button>
    </div>
  </form>
}

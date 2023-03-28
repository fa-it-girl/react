
import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpenseFilter from "./NewExpense/ExpenseFilter";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear)=>{
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }


  const expenses = [
    {id: 'e1', title: "car insurance", amount: 222, date: new Date(2020,3,28)},
    {id: 'e2',title: "paper", amount: 12, date: new Date(2020,4,28)},
    {id: 'e3',title: "course", amount: 6200, date: new Date(2020,3,28)},
    {id: 'e4',title: "computer", amount:234.9, date: new Date(2020,3,28)},
  ]

  return(
    <div className="expenses">
    <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/>
      <ExpenseItem title = {expenses[0].title} amount ={expenses[0].amount} date = {expenses[0].date} />
      <ExpenseItem title = {expenses[1].title} amount ={expenses[1].amount} date = {expenses[1].date}/>
      <ExpenseItem title = {expenses[2].title} amount ={expenses[2].amount} date = {expenses[2].date}/>
      <ExpenseItem title = {expenses[3].title} amount ={expenses[3].amount} date = {expenses[3].date}/>

    </div>
  )
}


import './App.css';
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {

  function addExpenseHandler(expense) {
    console.log(expense)
  }
 return (
  <div>
    <NewExpense onAddExpense = {addExpenseHandler}/>
    <Expenses />
  </div>
 );
}

export default App;

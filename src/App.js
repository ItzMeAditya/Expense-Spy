import { useState } from "react/cjs/react.development";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";

const dummyExpenses = [
  {
    id : "e1",
    title : "Toilet Paper",
    amount : 94.12,
    date : new Date(2020,7,14)
  },
  {
    id : "e2",
    title : "New Tv",
    amount : 799.49,
    date : new Date(2021,2,12)
  },
  {
    id : "e3",
    title : "Car Insurance",
    amount : 294.67,
    date : new Date(2021,2,18)
  },
  {
    id : "e4",
    title : "New Desk (Wooden)",
    amount : 450,
    date : new Date(2021,5,12)
  },
];

function App() {
  const[expenses,setExpenses] = useState(dummyExpenses);

  const addExpenseDataHandler = (expense) => {
    setExpenses ((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseData = {addExpenseDataHandler}/>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
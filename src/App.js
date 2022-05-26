import React from 'react'

import { useState, useEffect } from "react/cjs/react.development";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
import MainHeader from "./Components/MainHeader/MainHeader";

/*{
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
*/

const dummyExpenses = [];

function App() {
  const[expenses,setExpenses] = useState(dummyExpenses);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(()=>{
    const userInfo = localStorage.getItem('loggedIn');
    if (userInfo === '1'){
      setIsLoggedIn(true);
    }
  },[]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    //localStorage.setItem('Email',email);
    //localStorage.setItem('Password',password);
    localStorage.setItem('loggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  const addExpenseDataHandler = (expense) => {
    setExpenses ((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
      <main>
        <NewExpense onAddExpenseData = {addExpenseDataHandler}/>
        <Expenses items = {expenses} />
      </main>
    </React.Fragment>
  );
}

export default App;
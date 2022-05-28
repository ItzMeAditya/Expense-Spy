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

function App() {
  const[expenses,setExpenses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(()=>{
    fetch('http://localhost:2000/expenses')
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Creating or editing a post failed!');
      }
      return res.json();
    })
    .then(resData => {
      setExpenses(resData.data);
    })
    .catch(err => console.log(err));
  },[])


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

  const deleteItemHandler = (_id) => {
    fetch('http://localhost:2000/expenses/'+_id,{
      method : 'DELETE'
    })
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Deleting a post failed!');
      }
      return res.json();
    })
    .then(() => {
      setExpenses(expenses.filter(p => p._id !== _id));
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
      <main>
        <NewExpense/>
        <Expenses items = {expenses} onDeleteItem={deleteItemHandler}/>
      </main>
    </React.Fragment>
  );
}

export default App;
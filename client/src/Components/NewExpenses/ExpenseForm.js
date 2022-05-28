import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const[enteredTitle,setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = () => {

        let url = 'http://localhost:2000/expenses';

        fetch(url,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                title : enteredTitle,
                amount : enteredAmount,
                date : enteredDate
            })
        })
        .then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Creating or editing a post failed!');
            }
            return res.json();
        })
        .then(resData => {
            const data  = {
                _id : resData.data._id,
                title : resData.data.Title,
                amount : resData.data.Amount,
                date : new Date(resData.data.Date)
            }
            props.onSaveExpenseData(data);
        })
        .catch(err => console.log(err));

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
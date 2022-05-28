import ExpenseItem from "./ExpenseItem";
import "./ExpenseLists.css";

const ExpenseLists = (props) => {
    if (props.items.length === 0){
        return <h2 className="expenses-list__fallback">No Expenses Found!</h2>
    }

    const deleteHandler = (_id) => {
        props.deleteItem(_id);
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expenses)=>(
                <ExpenseItem 
                    key = {expenses._id}
                    _id = {expenses._id}
                    title = {expenses.Title}
                    amount = {expenses.Amount}
                    date = {expenses.Date}
                    onDelete = {deleteHandler}
                />
            ))}
        </ul>
    );
}

export default ExpenseLists;
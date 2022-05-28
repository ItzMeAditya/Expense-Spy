import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem (props){

    const deleteItem = () => {
        props.onDelete(props._id);
    }

    return (
        <li>
            <div className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item_description"></div>
                <h2>{props.title}</h2>
                <h2 className="expense-item__price"><span>&#8377;</span> {props.amount}</h2>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </li>

    );
}

export default ExpenseItem;
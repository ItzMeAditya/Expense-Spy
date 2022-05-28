import { useState } from "react/cjs/react.development";
import ExpenseChart from "./ExpenseChart";
import ExpenseLists from "./ExpenseLists";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState("2022");
    const selectYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense)=>{
        return new Date(expense.Date).getFullYear().toString() === selectedYear;
    });

    const deleteItem = (_id) => {
        props.onDeleteItem(_id);
    }

    return (
        <div className="expenses">
            <div>
                <ExpensesFilter selected={selectedYear} onSelectYear = {selectYearHandler} />
            </div>
            <ExpenseChart expenses = {filteredExpenses} />
            <ExpenseLists items={filteredExpenses} deleteItem={deleteItem}/>
        </div>

    );
}

export default Expenses;
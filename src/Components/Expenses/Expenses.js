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
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div className="expenses">
            <div>
                <ExpensesFilter selected={selectedYear} onSelectYear = {selectYearHandler} />
            </div>
            <ExpenseChart expenses = {filteredExpenses} />
            <ExpenseLists items={filteredExpenses}/>
        </div>

    );
}

export default Expenses;
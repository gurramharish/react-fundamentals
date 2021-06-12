import { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const expenses = props.expenses;
    console.log('Expenses :=======> ', expenses);
    const [filteredExpenses, setFilteredExpenses] = useState(expenses);
    console.log("Filtered Expenses :======> ", filteredExpenses);
    const [selectedFilter, setSelectedFilter] = useState('')
    const selectYearHandler = year => {
        console.log('Slected year for filtering expenses :: ',year);
        setSelectedFilter(year)
        setFilteredExpenses(() => {
            if(year)
                return expenses.filter(expense => expense.date.getFullYear().toString() === year);
            else
                return expenses;
        })
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onSelectFilterYear={selectYearHandler} selectedYear={selectedFilter}/>
                {
                    filteredExpenses.map(expense => <ExpenseItem
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}
                        key={expense.id}
                    />)
                }
            </Card>
        </div>
    );
}

export default Expenses;
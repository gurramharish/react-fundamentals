import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
    const expenses = props.expenses;
    return (
        <Card className="expenses">
            {
                expenses.map(expense => <ExpenseItem
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
                key={expense.id}
                />)
            }
        </Card>
    );
}

export default Expenses;
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenses = props.expenses;
    return (
        <div>
            {
                expenses.map(expense => <ExpenseItem
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
                key={expense.id}
                />)
            }
        </div>
    );
}

export default Expenses;
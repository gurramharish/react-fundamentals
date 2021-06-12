import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpense = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString(),
            date: new Date(expense.date)
        };
        console.log('New Expense : ', expenseData)
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={saveExpense}/>
        </div>
    )
}

export default NewExpense;
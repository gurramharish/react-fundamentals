import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [newExpense, setNewExpense] = useState({ title: '', amount: '', date: '' })

    const inputChangeHandler = (event) => {
        console.log(`${event.target.name} change: ${event.target.value}`);
        setNewExpense((previousState) => {
            return {
                ...previousState,
                [event.target.name]: event.target.value,
            }
        })
    }

    const saveExpense = (event) => {
        event.preventDefault();
        console.log('Saving expense :: ', newExpense);
        props.onSaveExpense(newExpense);
        setNewExpense({title: '', amount: '', date: ''})
    }
    return (
        <form onSubmit={saveExpense}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" name="title" value={newExpense.title} onChange={inputChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="0.1" step="0.1" name="amount" value={newExpense.amount} onChange={inputChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" name="date" value={newExpense.date} onChange={inputChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;
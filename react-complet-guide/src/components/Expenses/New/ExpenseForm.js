import './ExpenseForm.css'

const ExpenseForm = () => {

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" name="title" />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="0.1" step="0.1" name="amount" />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" name="date" />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;
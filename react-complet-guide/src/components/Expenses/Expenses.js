import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { Fragment } from "react";

const Expenses = (props) => {
    const expenses = props.expenses;
    return (
        <Fragment>
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
        </Fragment>
    );
}

export default Expenses;
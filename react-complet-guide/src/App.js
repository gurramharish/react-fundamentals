import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/New/NewExpense';

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenseList, addExpenseToList] = useState(expenses)
  
  const addExpesnse = (expense) => {
    console.log("Expense in app.js :: ", expense);
    addExpenseToList((prevState) => {
      return [expense, ...prevState];
    })
  }
  return (
    <div>
      <NewExpense  onAddExpense={addExpesnse}/>
      <Expenses expenses={expenseList}/>      
    </div>
  );
}

export default App;

# React Fundamentals

## What is React and Why would we need it ?

A JavaScript library for building user interfaces. All about building modern, reactive user interfaces for web.

## Why React instead of "Just JavaScript" ?

Easy to develop rich interactive web pages, with declrative and component focused approach.

## Creating react app

    ```bash
    npx create-react-app my-first-react-app
    ```

## props

1. Inorder to pass data from one component to other component we need `props`.

    ```javascript
        <ExpenseItem
            date={new Date(2021, 3, 22)}
            title="Car Modification"
            amount="1000000"
        />;

        function ExpenseItem(props) {
            return (
                <div className="expense-item">
                <div>{props.date.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">INR {props.amount}</div>
                </div>
                </div>
            );
        }
    ```

## Composition using props.children

1. Composition is technique is used for projecting dynamic content in the same component.

Example:
    ```javascript
        export default function Card(props) {
            const classes = `card ${props.className}`;
            return (
                <div className={classes}>
                    {props.children}
                </div>
            );
        }
    ```

    ```javascript
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>INR {props.amount}</div>
                    </div>
        </Card>
    ```

## useState hook

1. useState hook is used to set the initial state in the component and provide te setter method to update the state.

```javascript
const [newExpense, setNewExpense] = useState({title: '', amount: '', date: ''});
```

1. Updating the state which depends on previous state

```javascript
setNewExpense((prevState) => {...prevState, title: 'Mobile Phone'})

setNewExpense({title: '', amount: '', date: ''}) // Reset form which dont need previous state
```
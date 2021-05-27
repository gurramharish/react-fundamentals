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

    ```typescript
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

import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    //OR
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })

        //OR better approach for above      //for handling multiple states
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title: event.target.value
        //     }
        // })
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         amount: event.target.value
        //     }
        // })
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         date: event.target.value
        //     }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: title,
            amount: +amount,      //+ to enforce type conversion to string
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData)
        console.log(expenseData);
        setAmount("")
        setDate("")
        setTitle('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={amount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={date} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
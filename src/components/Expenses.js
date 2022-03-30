import React from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

function Expenses(props) {

    return (
        <div className='expenses'>
            <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount} />
            <ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount} />
        </div>
    )
}

export default Expenses
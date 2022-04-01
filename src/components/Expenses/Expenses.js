import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState("2022")

    const onYearSelect = year => {
        setSelectedYear(year)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    })

    return (
        <>
            <Card className='expenses'>
                <ExpenseFilter selectedYear={selectedYear} onYearSelect={onYearSelect} />
                {
                    filteredExpenses.map((expense) => {
                        return (
                            <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
                        )
                    })
                }
            </Card>
        </>
    )
}

export default Expenses
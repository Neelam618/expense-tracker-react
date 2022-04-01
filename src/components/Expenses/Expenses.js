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

    return (
        <>
            <Card className='expenses'>
                <ExpenseFilter selectedYear={selectedYear} onYearSelect={onYearSelect} />
                <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount} />
                <ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount} />
            </Card>
        </>
    )
}

export default Expenses
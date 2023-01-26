import React from 'react';
import Card from '../Design/Card';
import Expense from './Expense';

import "./Expenses.css";

const Expenses = ({expenses}) => {


return (
    <Card className='expenses'>
        <ul>
            {expenses.map((myExpense) => {
                return <Expense key={myExpense.id} expense={myExpense} />;
            })}
        </ul>
    </Card>
    );
        };



export default Expenses
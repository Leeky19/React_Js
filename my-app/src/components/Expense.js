import React from 'react';
import Card from '../Design/Card';
import "./Expense.css";


const Expense = ({expense}) => {
    return ( <div className='expenses'>
                <div className='expense-description'>
                    <h2 className ='expense-name'> {expense.name}</h2>
                    <div className='expense-price'>{expense.price}€</div>
                </div>
                <div className='expense-date'>{expense.date.toDateString()}</div>
            </div>
    );
}

export default Expense
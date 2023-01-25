import React from 'react';
import Card from '../Design/Card';

const Expense = (props) => {
    console.log(props)
    return ( <div className='expenses'>
                <div className='expense-description'>
                    <h2 className ='expense h2'> Papier</h2>
                    <div className='expense-price'>{15}€</div>
                </div>
                <div className='expense-date'>date.toDateString()</div>
            </div>
    );
}

export default Expense
import React from 'react';
import Card from '../Design/Card';


const date = new Date(2018, 8, 22);

const Expenses = (props) => {
    return (
        <li>
            <Card className='expenses'>
                <div className='expense-description'>
                    <h2> Papier </h2>
                    <div className='expense-price'>{15}€</div>
                </div>
                <div className='expense-date__month'>date.toDateString()</div>
            </Card>
        </li>
    );
} 


export default Expenses
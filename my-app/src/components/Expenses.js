import React from 'react';
import Card from '../Design/Card';

const Expenses = (props) => {
    return (
        <li>
            <Card className='expenses'>
                <div className='expense-description'>
                    <h2>{props.name}</h2>
                    <div className='expense-price'>{props.amount}€</div>
                </div>
            </Card>
        </li>
    );
} 


export default Expenses
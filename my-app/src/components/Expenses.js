import React from 'react';
import Card from '../Design/Card';

const Expenses = (props) => {
    return (
        <li>
            <Card className='expenses'>
                <Expenses date={new Date(2018, 8, 22)} />
                <div className='expense-description'>
                    <h2>{props.name}</h2>
                    <div className='expense-price'>{props.amount}€</div>
                </div>
            </Card>
        </li>
    );
} 


export default Expenses
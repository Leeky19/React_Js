import React, { useState } from 'react';

const MyForm = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };

    const submitForm =(event) =>{
        event.preventDefault();
        if (!name || !age) {
            alert('Name and age fields are required!');}
        const expenseData = {
            name: name,
            age: age,
          };

          props.onSaveExpenseData(expenseData);
        setName('');
        setAge('');
    }
    
    return(<form onSubmit={submitForm}>
        <h1>MyForm</h1>
        <div className='new-Name'>
            <label>Name</label>
            <input placeholder="name" type="text" value={name} onChange={nameChangeHandler}/>
        </div>
        <div className='new-Age'>
            <label>Age</label>
            <input placeholder="age" type="text" value={age} onChange={ageChangeHandler}/>
        </div>
        <div className='new-expense'>
            <button type="button" onClick={props.onCancel}> Cancel </button>
            <button type='submit'>Soumettre</button>
        </div>
       
    </form>
    )
}

export default MyForm
import React from "react";
import Input from './Input'

const MyForm = ({inputs}) => {
 return(
    <div className='inputs'>
        <ul>
            {inputs.map((myInput) => {
                return <Input key={myInput.id} input={myInput}/>
            })}
        </ul>
        <button>Cliquer</button>
    </div>
    );
 };

 export default MyForm
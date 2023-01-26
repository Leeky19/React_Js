import React from "react";

const Input = ({input}) => {
    return (<div className='inputs'>
                <div className='inputs-description'>
                    <h3 className='input-name'> {input.name}</h3>
                    <div className='input-fields'> <input/> </div>
                </div>
    </div>
     )
}

export default Input
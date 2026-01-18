
import React, { useState } from 'react';

const TextInput=()=>{
    const [state, setState] = useState('');

    const handleName = (event)=>{
        setState(event.target.value)
    }
   
    return(
        <input
        onChange={(event)=>handleName(event)}
        type={'text'}
        value={state}
        />
    )
}

export default TextInput;
    
    
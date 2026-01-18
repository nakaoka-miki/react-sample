import React, { useState } from 'react';

const Counter = ()=>{
    const [count,steCount]=useState(0)

    const countUp =()=>{
        steCount(prevState=> prevState+1)
    }
    const countDown =()=>{
        steCount(prevState=> prevState-1)
    }

    return(  
     <div>
        <p>
            カウンター<dr/>
            現在のカウント数：{count}
        </p>
        <button onClick={countUp}>up</button>
        <button onClick={countDown}>down</button>
     </div>
    ) 
}

export default Counter;
import React, { useEffect, useState } from 'react';

const Counter = ()=>{
    const [count,steCount]=useState(0)

    const countUp =()=>{
        steCount(prevState=> prevState+1)
    }
    const countDown =()=>{
        steCount(prevState=> prevState-1)
    }

     useEffect(()=>{
        console.log("current count:",count)},[count])


    // // 毎回実行される
    // useEffect(()=>{
    //     console.log(count)
    // })

    // // 初回レンダリング後のみ実行される
    // useEffect(()=>{
    //     console.log(count)},[])

    // Triggerが変更される度に実行される
    // useEffect(()=>{
    //     console.log(count)},[trigger])

    // // Trigger１かTrigger２が変更される度に実行される
    // useEffect(()=>{
    //     console.log(count)
    // },[trigger1,trigger2])

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

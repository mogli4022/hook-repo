import { useState } from "react";

function Counter() {
    const initialValue=0
    const [count,setcount]=useState(initialValue)
    const [input,setInput]=useState("")
    const Inputhandler =(e)=>{
        setInput(e.target.value)
        if(isNaN(input)){
            setInput(1)
        }
    }
    const IncrementInputHandler=()=>{
        for( let i=0;i<input;i++)
        {
            setcount(prevCount=>prevCount+1)
        }
    }
    const DecrementInputHandler=()=>{
        for( let i=0;i<input;i++)
        {
            setcount(prevCount=>prevCount-1)
        }
    }
    console.log(input);
    return ( 
        <div>
            <h4>Counter</h4>
            <h4>{count}</h4>
            <input value={input} onChange={Inputhandler}/>
        <button onClick={()=>setcount(initialValue)}>set-Count</button>
        <button onClick={()=>setcount(prevCount=>prevCount+1)}>Increment</button>
        <button onClick={()=>setcount(prevCount=>prevCount-1)}>Decrement</button>
        <button onClick={IncrementInputHandler}>Increment by {input}</button>
        <button onClick={DecrementInputHandler}>Decrement by {input}</button>
        </div>
     );
}

export default Counter;
import { useEffect, useState } from "react";
function LocalStorage() {
    const [count,setcount]=useState(0);
    
    useEffect(()=>{
      localStorage.setItem("count",JSON.stringify(count))  
    },[count])

    const localstorageHandler =()=>{
        setcount(count+1) 
    }
    return ( 
        <div>
            <h1>Count:{count}</h1>
            <h2>local storage</h2>
            <button onClick={localstorageHandler}>setLocal</button>
        </div>
     );
}

export default LocalStorage;
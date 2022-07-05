import { useState } from "react";
function Array() {
    const[data,setdata]=useState([])
    const [id,setId]=useState(0)
    const [input,setInput]=useState()
    const clickhandler =()=>{
        setId(id+1)
       setdata([{Random:Math.floor(Math.random()*100)+1,idd:id ,name:input}])
    }
    const changehandler=(e)=>{
        setInput(e.target.value)
    }
        const sumitName=()=>{
            console.log(input);
        }
    console.log(data);
    return ( 
        <div>
           <button onClick={clickhandler}>setRandom</button> 
           <input  type="text" onChange={changehandler}/>
           <button onClick={sumitName}>submit</button>
        {
            data.map((item,i)=>{
                return(
                    <div key={i}>
                        <h1>{item.Random}</h1>
                        <h1>{item.name}</h1>
                    </div>
                )
            })
        }
          
        </div>
     );
}

export default Array;
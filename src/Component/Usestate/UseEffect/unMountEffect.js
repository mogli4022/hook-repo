import { useEffect, useState } from "react";

function UnMountEffect() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count+1)
    }

    const onClickFun = () => {
        console.log("click");
    }

    useEffect(() => {
        // Mount / Updated
        console.log("1, mounted & updated");
        const clearInterval1 = setInterval(() => {
            console.log("Set Interval time");
        }, 2000);
        // window.addEventListener("click", onClickFun)
        // Un-Mount
        return () => {
            console.log("2, unmount");
            clearInterval(clearInterval1)
            // window.removeEventListener("click", onClickFun)
        }
    },[count])

    return ( 
        <>
            <h1>Count - {count}</h1>
            <button onClick={handleClick}>Add</button>
        </>
     );
}

export default UnMountEffect;
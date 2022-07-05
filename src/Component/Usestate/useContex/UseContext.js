import { useState } from "react";
import Child1 from "./Chiled1";
import UserContext from "./Contex";

function UseContectComponent() {
    
    return ( 
        <UserContext.Provider value={[1,2,3]}>
            {/* <Child1></Child1> */}
            {[1,2,3].map((val)=><>{val}</>)}
        </UserContext.Provider>
    );
}

export default UseContectComponent;
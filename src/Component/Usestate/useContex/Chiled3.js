import { useContext } from "react";
import UserContext from "./Contex";

function Child3() {
    const user = useContext(UserContext);

    console.log(user)
    return ( 
    <>
        Child 3
        {user}
    </>
    );
}

export default Child3;
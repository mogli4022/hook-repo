import { useEffect, useState } from "react";
function Mouseeffect() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [display, setdisplay] = useState(true)
    const logkey = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        if (display) {
            document.addEventListener("mousemove", logkey)
        }
        else {
            setX(0)
            setY(0)
        }
        console.log(display);
        // console.log("Mouse move add");   
    })
    return (
        <div>
            <h1>X:{x} Y:{y}</h1>
            <h3>UseEffect</h3>
            <button onClick={() => setdisplay(!display)}>display</button>
        </div>
    );
}
export default Mouseeffect;
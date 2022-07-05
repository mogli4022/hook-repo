import { useRef } from "react";

function UseRef() {
    const inputElement = useRef();
    const focusInput = () => {
        // inputElement.current.focus();
        inputElement.current.value = "XYZ"
        inputElement.current.classList.add("XYZ")
        console.log(inputElement.current)
      };
    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}

export default UseRef;
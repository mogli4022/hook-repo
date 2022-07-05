import { useEffect, useReducer } from "react";
import { reducerTodo } from "./Reducer";


const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
];

function UseReducer() {
    const [todos, dispatch] = useReducer(reducerTodo, initialTodos);
    const [todos1, dispatch1] = useReducer(reducerTodo, initialTodos);
    const [todos2, dispatch2] = useReducer(reducerTodo, initialTodos);

    const handleComplete = (todo) => {
        dispatch1({ type: "COMPLETE", id: todo.id });
    };

    useEffect(()=>{
        console.log(todos1)
    },[todos1])

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    );
}

export default UseReducer;
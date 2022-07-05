export const reducerTodo = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, title: "Complate", date: "07/05/22" };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};
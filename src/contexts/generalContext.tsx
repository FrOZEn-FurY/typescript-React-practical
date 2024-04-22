import { createContext, useState } from "react";
import Todo from "../models/todoModel";
import axios from "axios";

let generalContext = createContext({
    todos: [] as Todo[],
    handleAdd: (data: Todo | Todo[]) => {},
    dataValues: {
        userId: -1,
        title: "",
        completed: false
    }
});

export function GeneralContextProvider(childern: JSX.Element): JSX.Element {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = async (data: Todo | Todo[]) => {
        if (!Array.isArray(data)) {
            const res = await axios.post("https://jsonplaceholder.typicode.com/todos", data);
            console.log(res.data);
            setTodos([...todos, data]);
        } else {
            setTodos(data);
        }            
    }

    return (
        <generalContext.Provider value={{todos, handleAdd: handleAdd, dataValues: {userId: -1, title: "", completed: false}}}>
            {childern}
        </generalContext.Provider>
    )
}

export default generalContext;
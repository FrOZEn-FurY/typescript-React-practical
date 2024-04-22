import axios from "axios";
import { useContext, useEffect } from "react";
import TodoComponent from "./todo";
import { Link } from "react-router-dom";
import generalContext from "../contexts/generalContext";

const Todos = () => {
    const url = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com'
    })
    const context = useContext(generalContext);

    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
            context.handleAdd(res.data);
        }
        getUsers();
    }, [])

    return ( 
        <>
        <div className="text-center">
            <Link to='/add-todo' className="btn btn-dark mt-2">Add todo</Link>
            <hr/>
        </div>
            <div className='flex-row justify-content-center'>
                <div className="row">
                    {
                        context.todos.map((todo) => {
                            return (
                                <div className="col-3" key={todo.id}>
                                    <TodoComponent todo={todo} onComplete={handleComplete} onRemove={handleRemove} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );

    function handleComplete(id: number) {
        let newTodos = context.todos.map((todo) => {
            if (todo.id === id && todo.completed !== true) {
                todo.completed = true;
            }
            else if (todo.id === id && todo.completed !== false) {
                todo.completed = false;
            }
            return todo;
        });
        context.handleAdd(newTodos);
    }

    async function handleRemove(id: number) {
        await url.delete(`/todos/${id}`);
        context.handleAdd(context.todos.filter((todo) => todo.id !== id));
    }
}
 
export default Todos;
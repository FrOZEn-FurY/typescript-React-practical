import Todo from '../models/todoModel'

type TodoElement = {
    todo: Todo,
    onComplete: (id: number) => void,
    onRemove: (id: number) => void
}

const TodoComponent = ({todo, onComplete, onRemove}: TodoElement) => {
    return ( 
        <div className='card border border-black m-2'>
            <div className='card-header bg-secondary text-dark border border-black'>
                <h5 className='card-title'>User: {todo.userId}</h5>
            </div>
            <div className='card-body'>
                <p className='card-text'>{todo.title}</p>
            </div>
            <div className='card-footer'>
                {handleDone()}
                <button onClick={() => onRemove(todo.id)} className='btn btn-danger m-1'>Remove</button>
            </div>
        </div>
    );

    function handleDone() {
        if (!todo.completed) {
            return <button onClick={() => onComplete(todo.id)} className='btn btn-success'>Done</button>;
        }
        return <button onClick={() => onComplete(todo.id)} className='btn btn-warning'>Not done</button>
    }
}
 
export default TodoComponent;
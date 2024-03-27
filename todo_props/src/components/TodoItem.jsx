function TodoItem({ todo, handleStatus }) {
  return (
    <li>
        { 
            todo.task
        }
        <input 
            type="checkbox"
            checked={ todo.done ? true : false }
            onChange={(event) => handleStatus(event)}
        />
    </li>
  )
}

export default TodoItem;

function TodoItem({ todo, index, handleStatus }) {
  return (
    <li
        style={{ backgroundColor: todo.done ? 'green' : 'red' }}
        onClick={ () => handleStatus(index) }
    >
        { 
            todo.task
        }
        {/* <input 
            type="checkbox"
            checked={ todo.done ? true : false }
            onChange={ () => handleStatus(index) }
        /> */}
    </li>
  )
}

export default TodoItem;

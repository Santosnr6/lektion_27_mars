import TodoItem from "./TodoItem";
import todos from '../assets/todos.json';

function TodoList() {

  const handleStatus = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;

    console.log(updatedTodos);
  }

  return (
    <ul>
        {
            todos.map((todo, index) => {
                return <TodoItem 
                  handleStatus={ handleStatus } 
                  todo={ todo } 
                  key={ index }
                  index={ index }
                />
            })
        }
    </ul>
  )
}

export default TodoList;

import TodoItem from "./TodoItem";
import todos from '../assets/todos.json';

function TodoList() {

  const handleStatus = (event) => {
    console.log(event.currentTarget);
  }

  return (
    <ul>
        {
            todos.map((todo, index) => {
                return <TodoItem 
                  handleStatus={ handleStatus } 
                  todo={ todo } 
                  key={ index }
                />
            })
        }
    </ul>
  )
}

export default TodoList;

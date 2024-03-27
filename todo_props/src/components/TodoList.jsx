import TodoItem from "./TodoItem";

function TodoList() {

    const todos = [
        {
            task : 'Köpa glass',
            done: false
        },
        {
            task : 'Äta glass',
            done: false
        },
        {
            task : 'Städa kattlådan',
            done: false
        },
        {
            task : 'Rasta katten',
            done: false
        },
        {
            task : 'Klappa katten',
            done: false
        }
    ];

  return (
    <ul>
        {
            todos.map((todo, index) => {
                return <TodoItem todo={ todo } key={ index }/>
            })
        }
    </ul>
  )
}

export default TodoList;

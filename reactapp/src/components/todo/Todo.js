//rafce
import "./Todo.css";
import TodoList from "../todo-list/TodoList";
import TodoCreate from "../todo-create/TodoCreate";

const Todo = () => {
  const todos = [
    { id: 1, title: "Eat" },
    { id: 2, title: "Sleep" },
    { id: 3, title: "Code" },
  ];

  //Mengambil data dari todo create
  const eventCreateTodo = (todo) => {
    todos.push(todo);
    console.log(todo);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList DataTodos={todos} />
    </div>
  );
};

export default Todo;

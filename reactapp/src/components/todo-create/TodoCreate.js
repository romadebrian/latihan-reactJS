import "./TodoCreate.css";

const TodoCreate = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: "Learn React",
    };
    props.onCreateTodo(newTodo);
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoCreate;

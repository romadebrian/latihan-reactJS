//rafce
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <ul>
      {/* {props.DataTodos.forEach((element) => {})} */}
      {props.DataTodos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;

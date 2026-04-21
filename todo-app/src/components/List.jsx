import { handleDelete, handleEdit } from "../helper";

function List({ setTodo, todos, setTodos, setCurrentId, setUpdateMode }) {
  return (
    <>
      {todos.map((todo) => (
        <ul>
          <li key={todo.id}>{todo.title}</li>
          <button
            onClick={() =>
              handleEdit(todo, setTodo, setCurrentId, setUpdateMode)
            }
          >
            update
          </button>
          <button onClick={() => handleDelete(todo.id, todos, setTodos)}>
            delete
          </button>
        </ul>
      ))}
    </>
  );
}

export default List;

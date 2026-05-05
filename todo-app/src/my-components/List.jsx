import {handleDelete} from '../helper.js'

const List = ({ todos, setTodos }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <div key={todo.dateTime}>
            <li>{todo.title}</li>
            <button>Update</button>
            <button onClick={() => handleDelete(todo.id, todos, setTodos)}>Delete</button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default List;

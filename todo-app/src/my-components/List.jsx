import {handleDelete} from '../helper.js'

const List = ({ todos, setTodos }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <div key={todo.dateTime}> {/* pass id here */}
            <li>{todo.title}</li>
            <button className='border text-red-500 p-2 bg-yellow-500'>Update</button>
            <button onClick={() => handleDelete(todo.id, todos, setTodos)}>Delete</button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default List;

import { TodoContext } from '../context/TodoProvider.jsx';
import {handleDelete} from '../helper.js'
import { Button } from "@/components/ui/button"
import { useContext } from 'react';

const List = () => {
  const { todos, setTodos } = useContext(TodoContext)
  return (
    <div  >
      <ul className="w-96 m-auto flex flex-col h-50 gap-3">
        {todos.map((todo) => (
          <div key={todo.dateTime} className=''> {/* pass id here */}
            <li>
              <p>Title: {todo.title || "NA"}</p>
              <p>Description: {todo.description || "NA"}</p>
              <p>Date/Time: {todo.datetime || "NA"}</p>
            </li>
            <Button >Update</Button>
            <Button onClick={() => handleDelete(todo.id, todos, setTodos)}>Delete</Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;

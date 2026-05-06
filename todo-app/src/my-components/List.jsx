import {handleDelete} from '../helper.js'
import { Button } from "@/components/ui/button"

const List = ({ todos, setTodos }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <div key={todo.dateTime}> {/* pass id here */}
            <li>{todo.title}</li>
            <Button >Update</Button>
            <Button onClick={() => handleDelete(todo.id, todos, setTodos)}>Delete</Button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default List;

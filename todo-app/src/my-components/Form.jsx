import { handleAdd } from "../helper";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { TodoContext } from "../context/TodoProvider";
import {useContext} from 'react'

const Form = ( ) => {

  const {todo, setTodo, setTodos, todos} = useContext(TodoContext)
  return (
    <>
      <form onSubmit={(e) => handleAdd(e, todo, setTodo, setTodos, todos)}
        className="w-96 m-auto flex flex-col mt-5 h-60 gap-5 "
        >
        {/* <Label> */}
          {/* Todo: */}
          <Input
            type="text"
            name="title"
            placeholder="Enter your todo"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })} //title
          />
        {/* </Label> */}
        {/* <Label> */}
          {/* Description: */}
          <Input
            type="text"
            name="desc"
            placeholder="Enter desc"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        {/* </Label> */}
        {/* <Label> */}
          {/* Date and Time: */}
          <Input
            type="datetime-local"
            name="dateTime"
            value={todo.dateTime}
            onChange={(e) => setTodo({ ...todo, dateTime: e.target.value })}
          />
        {/* </Label> */}
        <Button type="submit">Add todo</Button>
      </form>
    </>
  );
};

export default Form;

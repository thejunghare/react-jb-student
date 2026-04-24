import { useState, useEffect } from "react";
import Form from "./my-components/Form";

const initialTodo = {
  title: "",
  description: "",
  dateTime: "",
};

const App = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [dateTime, setDateTime] = useState("");

  // const [todo, setTodo] = useState(initialTodo);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    dateTime: "",
  });

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // get all the todos from my localstorage and store inside a state variable
    const data = JSON.parse(localStorage.getItem("todos")) || []; // string -> [{}]
    //console.log(data); // length zero
    setTodos(data);
  }, []);

  return (
    <>
      {/* Todo application: title, desc, datetime */}
      <Form todo={todo} setTodo={setTodo} setTodos={setTodos} />
      {/* order list */}
      {/* array -> todos(localstorage) */}

      {todos.map((todo) => (
        <ul>
          <li>{todo.title}</li>
        </ul>
      ))}
    </>
  );
};

export default App;

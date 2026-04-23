import { useState, useEffect } from "react";

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
    const data = Array.from(JSON.parse(localStorage.getItem("todos"))) || []; // string -> [{}]
    console.log(data); // length zero
    setTodos(data);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(todo.title, todo.description, todo.dateTime); // store localstorage
    localStorage.setItem("todos", JSON.stringify(todo)); //localstorage string
    setTodo({
      title: "",
      description: "",
      dateTime: "",
    });
  };
  return (
    <>
      {/* Todo application: title, desc, datetime */}
      <form onSubmit={(e) => handleAdd(e)}>
        <label>
          Todo:
          <input
            type="text"
            name="title"
            placeholder="Enter your todo"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })} //title
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="desc"
            placeholder="Enter desc"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </label>
        <label>
          Date and Time:
          <input
            type="datetime-local"
            name="dateTime"
            value={todo.dateTime}
            onChange={(e) => setTodo({ ...todo, dateTime: e.target.value })}
          />
        </label>
        <button type="submit">Add todo</button>
      </form>

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

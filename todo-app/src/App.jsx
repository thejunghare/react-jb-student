import { useState, useEffect } from "react";
import List from "./components/List";
import Form from "./components/Form";

const App = () => {
  // todo state variable we help us with inserating todos inside the state variable todos -> initial an empty object
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    dateTime: "",
  });

  // todos state variable will contain all our todos -> initial an empty array
  const [todos, setTodos] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(data);
  }, []);

  return (
    <>
      <Form
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
        updateMode={updateMode}
      />
      {/* Mapping through each array i.e. each todo */}
      <List
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
        setCurrentId={setCurrentId}
        setUpdateMode={setUpdateMode}
      />
    </>
  );
};

export default App;

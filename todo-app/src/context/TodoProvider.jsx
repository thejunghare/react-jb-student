import {useState, useEffect, createContext } from 'react';

export const TodoContext = createContext();

function TodoProvider ({children}) {
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
        <TodoContext.Provider value={{todo, setTodo, todos, setTodos}}>
            {children}
        </TodoContext.Provider>
    )

}

export default TodoProvider;
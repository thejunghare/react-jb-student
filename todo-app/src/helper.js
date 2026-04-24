const handleAdd = (e, todo, setTodo, setTodos) => {
  e.preventDefault();
  console.log(todo.title, todo.description, todo.dateTime); // store localstorage

  const perviousTodos = JSON.parse(localStorage.getItem("todos")) || []; //
  let allTodo = [...perviousTodos, todo];
  localStorage.setItem("todos", JSON.stringify(allTodo)); //localstorage string -> {} -> [{}]
  setTodos(allTodo);

  setTodo({
    title: "",
    description: "",
    dateTime: "",
  });
};

const handleDelete = () => {};

export { handleAdd, handleDelete };

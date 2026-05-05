const handleAdd = (e, todo, setTodo, setTodos, todos) => {
  e.preventDefault();
  console.log(todo.title, todo.description, todo.dateTime); // store localstorage

  const perviousTodos = JSON.parse(localStorage.getItem("todos")) || []; //
  let allTodo = [...perviousTodos, {...todo, id:todos.length + 1}];
  localStorage.setItem("todos", JSON.stringify(allTodo)); //localstorage string -> {} -> [{}]
  setTodos(allTodo);

  setTodo({
    title: "",
    description: "",
    dateTime: "",
  });
};

const handleDelete = (id, todos, setTodos) => {
  // filter out the todos ex-user clicked(which has to be deleted)
  const newTodos = todos.filter(todo => todo.id != id)
  // updated localstorage with new list of todo
  setTodos(newTodos)
  localStorage.setItem("todos",JSON.stringify(newTodos))
};

export { handleAdd, handleDelete };

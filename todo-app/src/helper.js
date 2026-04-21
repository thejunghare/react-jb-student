const handleAddTodo = (e, todo, setTodo, todos, setTodos, updateMode) => {
  e.preventDefault(); //  stop page to refresh
  // get all the perivous todo from local storage and append users new todo the same
  let newList = []; // initially empty for todos
  if (updateMode) {
    // if true -> select the current todo
    newList = todos.map((t) => (t.id == todo.id ? todo : t));
  } else {

    //else -> get the todos (new-todo)
    // newList = JSON.parse(localStorage.getItem("todos")) || [];
    newList = [...newList, { ...todo, id: newList.length + 1 }];
  }

  // append new-todo to old todo list

  // update state variable with updated list of todos
  setTodos(newList);
  // load in local storage
  localStorage.setItem("todos", JSON.stringify(newList));
  //empty the input field
  setTodo({
    title: "",
    description: "",
    dateTime: "",
  });
};

const handleEdit = (todo, setTodo, setCurrentId, setUpdateMode) => {
  setCurrentId(todo.id);
  setUpdateMode(true);
  setTodo({
    id: todo.id,
    title: todo.title,
    description: todo.description,
    dateTime: todo.dateTime,
  });
};

const handleDelete = (id, todos, setTodos) => {
  console.log("inside function");

  const newList = todos.filter((todo) => todo.id != id);
  setTodos(newList);
  localStorage.setItem("todos", JSON.stringify(newList));
};

export { handleAddTodo, handleDelete, handleEdit };

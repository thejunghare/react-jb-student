const List = ({ todos }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <div key={todo.dateTime}>
            <li>{todo.title}</li>
            <button>Update</button>
            <button>Delete</button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default List;

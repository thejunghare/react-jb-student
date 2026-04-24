import { handleAdd } from "../helper";

const Form = ({ todo, setTodo, setTodos }) => {
  return (
    <>
      <form onSubmit={(e) => handleAdd(e, todo, setTodo, setTodos)}>
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
    </>
  );
};

export default Form;

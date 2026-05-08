import TodoProvider from "./context/TodoProvider";
import Form from "./my-components/Form";
import List from "./my-components/List";

const App = () => {
  return (
    <TodoProvider>
      <Form />
      <List  />
    </TodoProvider>
  );
};

export default App;

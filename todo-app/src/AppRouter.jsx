import TodoProvider from "./context/TodoProvider";
import Dashboard from "./my-components/Dashboard";
import Form from "./my-components/Form";
import List from "./my-components/List";
import Pricing from "./my-components/Pricing";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const AppRouter = () => {
  return (
    // define route -> localhost:5173/ ->index.html (App.jsx) /pricing -> (Pricing.jsx)
    <BrowserRouter>
      <TodoProvider>
        <div className="flex border m-2 p-2 gap-3">
          <Link to="/add-todo" className=" underline text-blue-500">
            Add Todo
          </Link>
          <Link to="/see-todo" className="underline text-blue-500">
            List Todo
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/see-todo" element={<List />} />
          <Route path="/add-todo" element={<Form />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
};

export default AppRouter;

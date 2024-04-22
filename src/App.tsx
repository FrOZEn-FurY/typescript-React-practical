import { Routes, Route } from "react-router-dom";
import Home from "./conponents/home";
import Reminders from "./conponents/reminders";
import Navbar from "./conponents/navbar";
import Todos from "./conponents/todos";
import NewTodo from "./conponents/newTodo";
import { GeneralContextProvider } from "./contexts/generalContext";

function App() {
  return GeneralContextProvider(
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/reminders" element={<Reminders></Reminders>} />
        <Route path="/todos" element={<Todos></Todos>} />
        <Route path="/add-todo" element={<NewTodo></NewTodo>} />
        <Route path="*" element={<Home></Home>} />
      </Routes>
    </>
  );
}

export default App;

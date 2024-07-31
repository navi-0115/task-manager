import "./App.css";
import { TaskList } from "./components/TaskList.tsx";
import { Form } from "./components/Form.tsx";
import { Header } from "./components/Header.tsx";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <TaskList />
    </div>
  );
}

export default App;

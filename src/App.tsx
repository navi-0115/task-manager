import "./App.css";
import { dataTasks } from "./models/task-data.ts";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(dataTasks);

  return (
    <div>
      <h1>Todo List</h1>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

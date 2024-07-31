import "./App.css";
import { dataTasks } from "./models/task-data.ts";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(dataTasks);

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

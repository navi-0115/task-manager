import { dataTasks } from "../models/task-data.tsx";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  isDone: boolean;
}
export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(dataTasks);

  return (
    <div>
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

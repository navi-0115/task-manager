import "./App.css";
import { useState } from "react";

function App() {
  const listTask = [
    { id: 1, text: "Go to TETO" },
    { id: 2, text: "Go home" },
    { id: 3, text: "Bootcamp task" },
  ];

  return (
    <div>
      <h1>Todo List</h1>

      <ul>
        {listTask.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

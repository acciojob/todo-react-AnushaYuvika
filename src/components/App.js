
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((item, i) => {
      return i !== index;   
    });
    setTodos(updated);
  }

  return (
    <div>
      <h1>To-Do-List</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}  
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

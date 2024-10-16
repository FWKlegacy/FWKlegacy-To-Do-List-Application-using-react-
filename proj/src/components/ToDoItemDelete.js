import React, {useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// removing an item
function TodoItem({ task }) {
    const { removeTask, toggleComplete } = useContext(TaskContext);
  
    if (!task) return null;
  
    return (
      <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
        <button onClick={() => removeTask(task.id)}>Remove</button>
      </li>
    );
  }
  

export default TodoItem;
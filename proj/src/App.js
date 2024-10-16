import React from "react";
import TaskProvider from "./context/TaskContext";
import AddTaskForm from "./components/AddFormTask";
import TodoList from "./components/ToDoList";


function App() {
  return (
  <TaskProvider>
    <div className="container">
      <h1>My Daily Tasks To-do List</h1>
      <AddTaskForm/>
      <TodoList/>
    </div>
  </TaskProvider>
  );
}

export default App;

import React, { createContext, useEffect, useState } from "react";


export const TaskContext= createContext();

 function TaskProvider({children}){
const [tasks, setTasks]= useState([]);


//syncing tasks with local storage

useEffect(()=>{
const savedTask= JSON.parse(localStorage.getItem("tasks"))||[];
    setTasks(savedTask);
},[]);


useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks]);


//adding  a task
const addTask = (taskText) => {
    const newTask = {
      id: Date.now(), 
      text: taskText,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  

//removing a task
const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  

//toggle completed tasks

const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
return(
<TaskContext.Provider value={{tasks, addTask,removeTask,toggleComplete}}>
{children}
</TaskContext.Provider>
);
}

export default TaskProvider;

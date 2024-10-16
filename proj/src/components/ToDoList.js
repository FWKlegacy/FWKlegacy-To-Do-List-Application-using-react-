import React, { useContext } from "react"; 
import TodoItem from "./ToDoItemDelete";
import { TaskContext } from "../context/TaskContext";

//Adding an Item
function TodoList(){
    const{tasks}= useContext(TaskContext);

    return(
        <ul>
            {tasks.length > 0 ?(
                tasks.map((task,index)=>(
                    <TodoItem key= {task.id} task= {task} index= {task.id}/>
                ))):(<p>No Task yet. Add one !</p>)}
        </ul>
                
    );
}


export default TodoList;
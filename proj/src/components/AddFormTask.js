import React, {useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";


//adding a form
function AddTaskForm(){
const [input, setInput]= useState("");
const {addTask}= useContext(TaskContext);

//handle form submit
const handleSubmit=(e)=>{
    e.preventDefault();
    if(input.trim()){
        addTask(input);
        setInput("");
    };
};
 return(
<form onSubmit={handleSubmit}>
<input type="text" value={input}
    onChange={(e)=>setInput(e.target.value)}/>
   <button type="submit">Add Task</button>
</form>
 );

}


export default AddTaskForm;
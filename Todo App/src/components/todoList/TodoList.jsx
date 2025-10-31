import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import styles from  './Todo.module.css';

function TodoList(){
const [taskInput,setTaskInput] = useState("");
const [tasks,setTasks] = useState([]);


    return (
        <>
<div className={styles.todoContainer}>


<TaskForm 
taskInput={taskInput}
setTaskInput={setTaskInput}
setTasks={setTasks}
/>


<TaskList 
tasks={tasks} 
setTasks = {setTasks} />
</div>
        
        </>
    )
}


export default TodoList;
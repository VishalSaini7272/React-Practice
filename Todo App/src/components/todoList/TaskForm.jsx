import styles from  './Todo.module.css';




function TaskForm({taskInput,setTaskInput, setTasks}){

const onInput = (e)=>{
const value = e.target.value;
 setTaskInput(value);
}

const onAdd = ()=>{
    if (taskInput.length<3) return;
    
const newTask = {
    id:parseInt(Math.random()*100000),
    task:taskInput,
}
setTasks((currTasks)=>[newTask, ...currTasks])
setTaskInput("");
}

    return(
        <>
        <div className={styles.todoInputBox}>
        <input 
        onChange={onInput}
        value={taskInput}
        className={styles.todoInput}
        
        placeholder="Write your task here..."
         />
         <button disabled={taskInput.length<3} 
         onClick={onAdd}className={styles.todoAddBtn}> Add </button>
        </div>

    
        </>
    )
}

export default TaskForm;
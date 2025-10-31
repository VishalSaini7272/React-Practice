import TaskItem from "./TaskItem";
import styles from  './Todo.module.css';        

function TaskList({tasks,setTasks}){
 
    const isEmpty = tasks.length === 0;



    return (
    <>
    <div className={styles.taskList}>
        { isEmpty && <div className={styles.empty}>Task is Empty</div>}
        {!isEmpty && 
         tasks.map((item)=>{
            return <TaskItem key={item.id} setTasks={setTasks} taskItem={item} />
        }) }
</div>


    </>
    )
}

export default TaskList;
import styles from  './Todo.module.css';
import { MdEdit as EditIcon, MdDeleteForever as DeleteIcon} from "react-icons/md";



function TaskItem({taskItem,setTasks}){
const {task,id} = taskItem 
const onEdit = ()=>{}
const onDel = ()=>{
    setTasks((currTasks)=> currTasks.filter((item)=> item.id !== id))
}
    return(
        <>
        <div className={styles.taskItem}>
<p className={styles.taskText}>{task}</p>
<div className={styles.todoItemAction}>
    <button onClick={onEdit} className={styles.editBtn}><EditIcon /></button>
    <button onClick={onDel}className={styles.delBtn}> <DeleteIcon /> </button>
</div>
</div>

        </>
    )
}

export default TaskItem;
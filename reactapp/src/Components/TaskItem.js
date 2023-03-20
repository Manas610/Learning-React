import "./TaskItem.css"
function TaskItem(){
    const taskDate = new Date(2021 , 4 , 3);
    const taskTitle = "Blockchain";
    const taskPriority = 1;
    return (
    <div className="task-item">
        <div>{taskDate.toISOString()}</div>
        <div className="task-item__description">
            <h2 className="task-item">{taskTitle}</h2>
            <div className="task-item__priority">{taskPriority}</div>
        </div>
    </div>);
}

export default TaskItem;
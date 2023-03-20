import "./TaskItem.css"
function TaskItem(){
    return (
    <div  className="task-item">
        <div>1st March</div>
        <div className="task-item__description">
            <h2 className="task-item">Blockchain</h2>
            <div className="task-item__priority">1</div>
        </div>
    </div>);
}

export default TaskItem;
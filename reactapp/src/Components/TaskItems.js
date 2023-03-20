import "./TaskItem.css"
import TaskDate from "./TaskDate";
function TaskItems(props){
    return (
    <div className="task-item">
        <TaskDate date = {props.date}></TaskDate>
        <div className="task-item__description">
            <h2 className="task-item">{props.title}</h2>
            <div className="task-item__priority">{props.priority}</div>
        </div>
    </div>);
}

export default TaskItems;
import React from "react";

const TaskList = ({tasklist , setTasklist, task, setTask}) => {

  const editTask = (id) => {
    const selectedTask = tasklist.find(todo => todo.id === id);
    setTask(selectedTask);
  }

  const deleteTask = (id) => {
    const updatedTasklist =  tasklist.filter(todo => todo.id !== id);
    setTasklist(updatedTasklist);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">TODO</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => {setTasklist([])}}>Clear All</button>
      </div>
      <ul>
        

        {tasklist.map((task) => 
        (
          <li key={task.id}>
          <p>
            <span className="name">{task.name}</span>
            <span className="time">{task.time}</span>
          </p>
          <i className="bi bi-pencil-square" onClick={() => editTask(task.id)}></i>
          <i className="bi bi-trash" onClick={() => deleteTask(task.id)}></i>
        </li>
        ))}

          
      </ul>
    </section>
  );
};

export default TaskList;

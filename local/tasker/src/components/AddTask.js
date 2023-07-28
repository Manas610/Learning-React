import React from "react";

const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const onSubmitHandle = (e) => {
    e.preventDefault();
    const date = new Date();
    if(task.id){
      const updatedTask = tasklist.map((todo) => (
        todo.id === task.id ? {id: todo.id , name: task.name , time :`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}  : todo
      ))
      setTasklist(updatedTask);
    } else{
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
    }
    
    setTask({});
  };

  return (
    <section className="addTask">
      <form onSubmit={onSubmitHandle}>
        <input
          type="text"
          placeholder="Add Task"
          name="task"
          autoComplete="off"
          value={task.name || ""}
          onChange={e =>  setTask({...task,name:e.target.value})}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

export default AddTask;

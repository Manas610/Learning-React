import React from "react";
import "./app.css"

const TodoLists = (props) => {
    return (
    <>
    <div className="todo-style">
    <i className="fa fa-times" aria-hidden="true"  onClick={() => {
        props.onSelect(props.id);
    }} />
        <li> {props.text} </li>
    </div>
    </>
    )
}

export default TodoLists;
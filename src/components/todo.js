import React from 'react'
import '../styles/base.css'

const todo = (props) => {
    const deleteTodo = (e) => {
        e.preventDefault();
        props.deleteTodoHandler(props.todo.id);
        console.log(props.todo.id)
    }
    const completedTodo = () => {
        props.completionHandler(props.todo.id);
        console.log(props.todo.id)
    }
    return (
        <div className="todo">
            <div className="btns">
                <button onClick={deleteTodo}>X</button>
                <input type="checkbox" onChange={completedTodo}></input>
            </div>
            <h2 className={props.todo.completed ? "title done" : "title"}>{props.todo.title}</h2>
        </div>
    )
}

export default todo

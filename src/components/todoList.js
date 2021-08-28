import React from 'react'
import Todo from './todo'
import '../styles/base.css'

const todoList = (props) => {
    
    return (
        <div className="todo-list">
        {
            props.todos.map((todo) => {
                return (
                    <Todo key={todo.id} todo={todo} deleteTodoHandler={props.deleteTodoHandler} completionHandler={props.completionHandler}/>
                )
            })
        }
        </div>
    )
}

export default todoList

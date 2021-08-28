import React from 'react'
import '../styles/form.css'

const todoForm = (props) => {
    let newTitle = "";
    const getTitle = (event) => {
        newTitle = event.target.value;
        console.log(newTitle);
    }

    const addTodo = (event) => {
        event.preventDefault();
        props.addTodoHandler(newTitle);
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="type something here..." onChange={getTitle}></input>
                <button onClick={addTodo}>Submit</button>
            </form>
        </div>
    )
}

export default todoForm

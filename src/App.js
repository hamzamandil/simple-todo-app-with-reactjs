import React, {useState} from 'react'
import Header from './components/header'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import './styles/base.css'

function App() {
  const initial = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

  const [todos, setTodos] = useState(initial)
  localStorage.setItem('todos', JSON.stringify(todos));

  const addTodoHandler = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    };
    const curTodo = [...todos, newTodo];
    setTodos(curTodo)
    localStorage.setItem('todos', JSON.stringify(curTodo));
  }

  const deleteTodoHandler = (id) => {
    const curTodos = [...todos];
    const filtredTodos = curTodos.filter((todo) => todo.id !== id);
    // console.log(filtredTodos)
    setTodos(filtredTodos);
    localStorage.setItem('todos', JSON.stringify(filtredTodos));
    // console.log(todos)
  }

  const completionHandler = (id) => {
    const curTodos = [...todos];
    const newTodos = curTodos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    })
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
        <Header />
        <TodoForm addTodoHandler={addTodoHandler}/>
        <TodoList todos={todos} deleteTodoHandler={deleteTodoHandler} completionHandler={completionHandler}/>
      </div>
      </header>
    </div>
  );
}

export default App;
